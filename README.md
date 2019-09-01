# Vimate

Vimate is an sns for love vim.

## database design

## users table

| Column      | Type   | Options     |
| ----------- | ------ | ----------- |
| name        | string | null: false |
| uid         | text   | null: false |
| oauth_token | string | null: false |

### Association

- has_many vimrcs

## vimrcs table

| Column      | Type | Options     |
| ----------- | ---- | ----------- |
| image_url   | text | null: false |
| description | text |             |

### Association

- belongs_to :user
