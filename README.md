# Send Discord Message Action

This GitHub Action allows you to send messages to a Discord channel using a webhook.
More parameters and features will be available in the future.

## Inputs

### `github_token`

**Required** The GitHub token used to authenticate with the GitHub API. Else it will throw an error.

### `discord_webhook`

**Required** The URL of the Discord webhook you want to send messages to. Else it will throw an error.

### `message`

**Required** The message you want to send. Otherwise it will throw an error.

## Example usage

```yaml
steps:
- name: Send message to Discord
  uses: Enichy/Send_Discord_Message_Action@v1.1.11
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    discord_webhook: ${{ secrets.DISCORD_WEBHOOK }}
    message: 'Hello, World!'
```
