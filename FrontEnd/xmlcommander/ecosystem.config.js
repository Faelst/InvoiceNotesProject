apps : [
    {
      name          : 'InvoiceNotesProjectFrontEnd',
      script        : 'npx',
      interpreter   : 'none',
      args          : 'serve.cmd build -s',
      env_production : {
        NODE_ENV: 'production'
      }
    }
  ]