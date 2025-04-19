# Orion Vision MCP Server 🚀

> 🔌 **Compatible with Cline, Cursor, Claude Desktop, and any other MCP Clients!**
> 
> Orion Vision MCP is also compatible with any MCP client

The Model Context Protocol (MCP) is an open standard that enables AI systems to interact seamlessly with various data sources and tools, facilitating secure, two-way connections.

The Orion Vision MCP server provides:

* Seamless integration with Azure Form Recognizer / Document Intelligence
* Document analysis and form data extraction capabilities
* Support for various document types (receipts, invoices, ID documents, etc.)
* Type-safe operations with TypeScript

## Prerequisites 🔧

Before you begin, ensure you have:

* Azure Form Recognizer / Document Intelligence endpoint and key
* Claude Desktop or Cursor
* Node.js (v20 or higher)
* Git installed (only needed if using Git installation method)

## Orion Vision MCP server installation ⚡

### Running with NPX

```bash
npx -y orion-vision-mcp@latest
```

### Installing via Smithery

To install Orion Vision MCP Server for Claude Desktop automatically via Smithery:

```bash
npx -y @smithery/cli install @orion-vision/mcp --client claude
```

## Configuring MCP Clients ⚙️

### Configuring Cline 🤖

The easiest way to set up the Orion Vision MCP server in Cline is through the marketplace with a single click:

1. Open Cline in VS Code
2. Click on the Cline icon in the sidebar
3. Navigate to the "MCP Servers" tab (4 squares)
4. Search "Orion Vision" and click "install"
5. When prompted, enter your Azure Form Recognizer credentials

Alternatively, you can manually set up the Orion Vision MCP server in Cline:

1. Open the Cline MCP settings file:
```bash
# For macOS:
code ~/Library/Application\ Support/Code/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json

# For Windows:
code %APPDATA%\Code\User\globalStorage\saoudrizwan.claude-dev\settings\cline_mcp_settings.json
```

2. Add the Orion Vision server configuration to the file:
```json
{
  "mcpServers": {
    "orion-vision-mcp": {
      "command": "npx",
      "args": ["-y", "orion-vision-mcp@latest"],
      "env": {
        "AZURE_FORM_RECOGNIZER_ENDPOINT": "your-endpoint-here",
        "AZURE_FORM_RECOGNIZER_KEY": "your-key-here"
      },
      "disabled": false,
      "autoApprove": []
    }
  }
}
```

3. Save the file and restart Cline if it's already running.

### Configuring Cursor 🖥️

> **Note**: Requires Cursor version 0.45.6 or higher

To set up the Orion Vision MCP server in Cursor:

1. Open Cursor Settings
2. Navigate to Features > MCP Servers
3. Click on the "+ Add New MCP Server" button
4. Fill out the following information:
   * **Name**: Enter a nickname for the server (e.g., "orion-vision-mcp")
   * **Type**: Select "command" as the type
   * **Command**: Enter the command to run the server:
   ```bash
   env AZURE_FORM_RECOGNIZER_ENDPOINT=your-endpoint AZURE_FORM_RECOGNIZER_KEY=your-key npx -y orion-vision-mcp@latest
   ```
   > **Important**: Replace `your-endpoint` and `your-key` with your Azure Form Recognizer credentials

### Configuring the Claude Desktop app 🖥️

#### For macOS:
```bash
# Create the config file if it doesn't exist
touch "$HOME/Library/Application Support/Claude/claude_desktop_config.json"

# Opens the config file in TextEdit
open -e "$HOME/Library/Application Support/Claude/claude_desktop_config.json"
```

#### For Windows:
```bash
code %APPDATA%\Claude\claude_desktop_config.json
```

#### Add the Orion Vision server configuration:
```json
{
  "mcpServers": {
    "orion-vision-mcp": {
      "command": "npx",
      "args": ["-y", "orion-vision-mcp@latest"],
      "env": {
        "AZURE_FORM_RECOGNIZER_ENDPOINT": "your-endpoint-here",
        "AZURE_FORM_RECOGNIZER_KEY": "your-key-here"
      }
    }
  }
}
```

## Usage in Claude Desktop App 🎯

Once the installation is complete, and the Claude desktop app is configured, you must completely close and re-open the Claude desktop app to see the orion-vision-mcp server. You should see a hammer icon in the bottom left of the app, indicating available MCP tools.

### Orion Vision Examples

1. **Analyze a Document**:
```
Analyze the document at "https://example.com/document.pdf" using Azure Form Recognizer.
```

2. **Extract Form Data**:
```
Extract data from the invoice at "https://example.com/invoice.pdf".
```

3. **Process ID Document**:
```
Process the ID document at "https://example.com/id.pdf" and extract relevant information.
```

## Troubleshooting 🛠️

### Common Issues

1. **Server Not Found**
   * Verify the npm installation by running `npm --version`
   * Check Claude Desktop configuration syntax
   * Ensure Node.js is properly installed by running `node --version`

2. **Azure Form Recognizer Credentials Issues**
   * Confirm your Azure Form Recognizer endpoint and key are valid
   * Check the credentials are correctly set in the config
   * Verify no spaces or quotes around the credentials

3. **Document Processing Issues**
   * Verify the document URL is accessible
   * Check the document format is supported
   * Ensure the document is not corrupted or password-protected

## Acknowledgments ✨

* Model Context Protocol for the MCP specification
* Anthropic for Claude Desktop
* Microsoft Azure for Form Recognizer / Document Intelligence 