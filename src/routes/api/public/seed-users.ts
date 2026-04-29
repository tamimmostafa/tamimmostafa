import { createFileRoute } from "@tanstack/react-router";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const SEED_TOKEN = "tm-seed-9c1a4e7b-once";

const USERS = [
  {
    email: "tamim@tamimmostafa.site",
    password: "TeMO@#2009!?$%*&",
    display_name: "Tamim",
    role: "admin" as const,
  },
  {
    email: "nona@tamimmostafa.site",
    password: "NonA2962010#$",
    display_name: "Nona",
    role: "member" as const,
  },
];

export const Route = createFileRoute("/api/public/seed-users")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        if (url.searchParams.get("token") !== SEED_TOKEN) {
          return new Response("forbidden", { status: 403 });
        }

        const results: any[] = [];
        for (const u of USERS) {
          // Try create; if exists, update password + confirm.
          const { data: created, error: createErr } =
            await supabaseAdmin.auth.admin.createUser({
              email: u.email,
              password: u.password,
              email_confirm: true,
              user_metadata: { display_name: u.display_name },
            });

          let userId = created?.user?.id;

          if (createErr) {
            // find existing
            const { data: list } = await supabaseAdmin.auth.admin.listUsers({
              page: 1,
              perPage: 200,
            });
            const existing = list?.users.find((x) => x.email === u.email);
            if (existing) {
              userId = existing.id;
              await supabaseAdmin.auth.admin.updateUserById(existing.id, {
                password: u.password,
                email_confirm: true,
                user_metadata: { display_name: u.display_name },
              });
            }
          }

          if (!userId) {
            results.push({ email: u.email, error: createErr?.message });
            continue;
          }

          // ensure profile
          await supabaseAdmin.from("profiles").upsert({
            id: userId,
            email: u.email,
            display_name: u.display_name,
          });

          // wipe existing roles, insert correct one
          await supabaseAdmin
            .from("user_roles")
            .delete()
            .eq("user_id", userId);
          await supabaseAdmin
            .from("user_roles")
            .insert({ user_id: userId, role: u.role });

          results.push({ email: u.email, id: userId, role: u.role, ok: true });
        }

        return new Response(JSON.stringify({ results }, null, 2), {
          headers: { "content-type": "application/json" },
        });
      },
    },
  },
});
