# Atlas DataHub MCP Server 🚀

> 🔌 **Compatible with Cline, Cursor, Claude Desktop, and any other MCP Clients!**
> 
> Atlas DataHub MCP is also compatible with any MCP client

The Model Context Protocol (MCP) is an open standard that enables AI systems to interact seamlessly with various data sources and tools, facilitating secure, two-way connections.

The Atlas DataHub MCP server provides:

* Seamless integration with Azure Form Recognizer / Document Intelligence
* Document analysis and form data extraction capabilities
* Support for various document types (receipts, invoices, ID documents, etc.)
* Type-safe operations with TypeScript

## Prerequisites 🔧

Before you begin, ensure you have:

* Azure Form Recognizer resource and credentials
* Claude Desktop or Cursor
* Node.js (v20 or higher)
* Git installed (only needed if using Git installation method)

## Atlas DataHub MCP server installation ⚡

### Running with NPX

```bash
npx -y atlas-datahub-mcp@latest
```

### Installing via Smithery

To install Atlas DataHub MCP Server for Claude Desktop automatically via Smithery:

```bash
npx -y @smithery/cli install @atlas-datahub/mcp --client claude
```

## Configuring MCP Clients ⚙️

### Configuring Cline 🤖

The easiest way to set up the Atlas DataHub MCP server in Cline is through the marketplace with a single click:

1. Open Cline in VS Code
2. Click on the Cline icon in the sidebar
3. Navigate to the "MCP Servers" tab (4 squares)
4. Search "Atlas DataHub" and click "install"
5. When prompted, enter your Azure Form Recognizer credentials

Alternatively, you can manually set up the Atlas DataHub MCP server in Cline:

1. Open the Cline MCP settings file:
```bash
# For macOS:
code ~/Library/Application\ Support/Code/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json

# For Windows:
code %APPDATA%\Code\User\globalStorage\saoudrizwan.claude-dev\settings\cline_mcp_settings.json
```

2. Add the Atlas DataHub server configuration to the file:
```json
{
  "mcpServers": {
    "atlas-datahub-mcp": {
      "command": "npx",
      "args": ["-y", "atlas-datahub-mcp@latest"],
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

To set up the Atlas DataHub MCP server in Cursor:

1. Open Cursor Settings
2. Navigate to Features > MCP Servers
3. Click on the "+ Add New MCP Server" button
4. Fill out the following information:
   * **Name**: Enter a nickname for the server (e.g., "atlas-datahub-mcp")
   * **Type**: Select "command" as the type
   * **Command**: Enter the command to run the server:
   ```bash
   env AZURE_FORM_RECOGNIZER_ENDPOINT=your-endpoint AZURE_FORM_RECOGNIZER_KEY=your-key npx -y atlas-datahub-mcp@latest
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

#### Add the Atlas DataHub server configuration:
```json
{
  "mcpServers": {
    "atlas-datahub-mcp": {
      "command": "npx",
      "args": ["-y", "atlas-datahub-mcp@latest"],
      "env": {
        "AZURE_FORM_RECOGNIZER_ENDPOINT": "your-endpoint-here",
        "AZURE_FORM_RECOGNIZER_KEY": "your-key-here"
      }
    }
  }
}
```

## Usage in Claude Desktop App 🎯

Once the installation is complete, and the Claude desktop app is configured, you must completely close and re-open the Claude desktop app to see the atlas-datahub-mcp server. You should see a hammer icon in the bottom left of the app, indicating available MCP tools.

### Atlas DataHub Examples

1. **Analyze a Document**:
```
Analyze the document at "https://example.com/document.pdf" using the prebuilt document model.
```

2. **Extract Form Data**:
```
Extract data from the invoice at "https://example.com/invoice.pdf".
```

3. **Use Custom Model**:
```
Analyze the document at "https://example.com/custom.pdf" using the custom model "my-custom-model".
```

## Available Tools

### analyze-document

Analyzes a document using Azure Form Recognizer and returns structured data.

Parameters:
- `url`: URL of the document to analyze
- `modelId`: (Optional) Model ID for custom models

### extract-form-data

Extracts structured data from forms using Azure Form Recognizer.

Parameters:
- `url`: URL of the form document to analyze
- `formType`: Type of form to analyze (receipt, invoice, idDocument, businessCard, custom)

## Troubleshooting 🛠️

### Common Issues

1. **Server Not Found**
   * Verify the npm installation by running `npm --version`
   * Check Claude Desktop configuration syntax
   * Ensure Node.js is properly installed by running `node --version`

2. **Form Recognizer Credentials Issues**
   * Confirm your Azure Form Recognizer endpoint is valid
   * Check the API key is correctly set in the config
   * Verify no spaces or quotes around the credentials

3. **Document Analysis Issues**
   * Verify the document URL is accessible
   * Check the document format is supported
   * Ensure the model ID is valid for custom models

## Acknowledgments ✨

* Model Context Protocol for the MCP specification
* Anthropic for Claude Desktop
* Microsoft Azure for Form Recognizer / Document Intelligence 