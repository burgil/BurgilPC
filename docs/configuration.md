# Configuration

## Content Security Policy (CSP)

Burgil Personal Computer enforces a strict CSP to restrict any potentially unsafe sources while allowing essential functionality like WebAssembly. Additional configurations are available in the `csp.config.js` file to ensure optimal security.

### Privacy Notice and Compliance

The framework is committed to data privacy and regulation compliance:

- **Local Storage Only**: All data is stored locally with zero external tracking.
- **GDPR and AI Act Compliance**: Terms of use align with GDPR standards and the EU AI Act, focusing on preventing usage in restricted high-risk AI areas.

- **Tailwind CSS**: Configured via `tailwind.config.js` and customized in `tailwind.css`.
- **TypeScript**: TypeScript configurations are split for browser (`tsconfig.browser.json`) and main processes (`tsconfig.json`).
