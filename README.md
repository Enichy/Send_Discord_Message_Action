# Send Discord Message Action

This GitHub Action allows you to send messages to a Discord channel using a webhook.

## Inputs

### `github_token`

**Required** The GitHub token used to authenticate with the GitHub API.

### `discord_webhook`

**Required** The URL of the Discord webhook you want to send messages to.

### `message`

**Required** The message you want to send.

The status of the action execution. '0' indicates success.

## Example usage

```yaml
steps:
- name: Send message to Discord
  uses: Enichy/Send_Discord_Message_Action@v1.1
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    discord_webhook: ${{ secrets.DISCORD_WEBHOOK }}
    message: 'Hello, World!'
```
