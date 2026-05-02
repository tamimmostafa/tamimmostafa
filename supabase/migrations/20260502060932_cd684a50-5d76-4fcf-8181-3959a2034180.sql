UPDATE auth.users
SET email = 'userM@tamimmostafa.site',
    raw_user_meta_data = COALESCE(raw_user_meta_data, '{}'::jsonb) || jsonb_build_object('email', 'userM@tamimmostafa.site'),
    email_change = '',
    email_change_token_new = '',
    email_change_token_current = ''
WHERE id = '6a8acbf5-0e7a-496c-9441-898c73a8356c';

UPDATE auth.identities
SET identity_data = COALESCE(identity_data, '{}'::jsonb) || jsonb_build_object('email', 'userM@tamimmostafa.site')
WHERE user_id = '6a8acbf5-0e7a-496c-9441-898c73a8356c'
  AND provider = 'email';