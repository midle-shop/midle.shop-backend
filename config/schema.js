
// Define a schema
var schema = {
  env: {
    doc: "The application environment.",
    format: ["production", "development", "test"],
    default: "development",
    env: "NODE_ENV",
  },
  language: {
    default: { doc: "Default language", format: String, default: "ru" },
    list: { doc: "Languages", format: Array, default: [ "ru" ] },
  },

  backend: {
    secure_mode: {
      doc: "HTTPS mode",
      format: Boolean,
      default: false,
    },
    http_port: {
      doc: "The port to bind.",
      format: "port",
      default: 8080,
      env: "HTTP_PORT",
      arg: "http-port",
    },
    http_port: {
      doc: "The http port to bind.",
      format: "port",
      default: 8080,
      env: "HTTP_PORT",
      arg: "http-port",
    },
    https_port: {
      doc: "The https port to bind.",
      format: "port",
      default: 8443,
      env: "HTTPS_PORT",
      arg: "https-port",
    },
    https_redirect: {
      doc: "http redirect to https",
      format: Boolean,
      default: false,
    },
    www_redirect: {
      doc: "redirect to www",
      format: Boolean,
      default: false,
    },
    ssl: {
      key: {
        doc: "Path to the private key",
        format: String,
        default: "",
      },
      cert: {
        doc: "Path to the cert",
        format: String,
        default: "",
      }
    }
  },

  mailer: {
    noreply: {
      from: {
        doc: "Sender address",
        format: String,
        default: "No Reply MIDLE <noreply@midle.shop>",
      },
      host: { doc: "SMTP server", format: String, default: "" },
      port: { doc: "SMTP port", format: "port", default: 465 },
      secure: { doc: "Mode", format: Boolean, default: true },
      auth: {
        user: { doc: "Username", format: String, default: "" },
        pass: { doc: "Password", format: String, default: "" },
      }
    }
  },

};

module.exports = schema;
