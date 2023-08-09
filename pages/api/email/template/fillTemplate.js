import linkedinImg from "./images/image-1.png";

const fillTemplate = (data) => {
  const dataDefault = {
    from: 'youremail goes here',
    type: 'greetings',
    subject: 'Title goes here...',
    preheader: '',
    greetings: 'Hey Ciao!',
    message: 'Come va? Spero che stia andando tutto bene...',
    callToAction: {
      name: 'Call to action',
      href: 'https://www.trishareal.com/',
      active: true,
    },
    conclusion: 'Your conclusion goes here...',
    thanks: 'Grazie per il tuo tempo. Buona Fortuna!',
    unsubscribe: {
      name: 'Unsubscribe',
      href: 'https://www.trishareal.com/',
      message: 'Email invadenti?',
      active: false,
    },
    footer: {
      name: '© 2023, Offerta da',
      href: 'https://www.trishareal.com/',
      message: 'trishasairenereal.vercel.app',
      active: true,
    },
  };

  const options = {
    ...dataDefault,
    ...data,
  };


  switch (options?.type) {
    case 'greetings':
      return `
      <!DOCTYPE HTML
      PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
      xmlns:o="urn:schemas-microsoft-com:office:office">
    
    <head>
    
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="x-apple-disable-message-reformatting">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title></title>
    
      <style type="text/css">
        @media only screen and (min-width: 520px) {
          .u-row {
            width: 500px !important;
          }
    
          .u-row .u-col {
            vertical-align: top;
          }
    
          .u-row .u-col-100 {
            width: 500px !important;
          }
    
        }
    
        @media (max-width: 520px) {
          .u-row-container {
            max-width: 100% !important;
            padding-left: 0px !important;
            padding-right: 0px !important;
          }
    
          .u-row .u-col {
            min-width: 320px !important;
            max-width: 100% !important;
            display: block !important;
          }
    
          .u-row {
            width: 100% !important;
          }
    
          .u-col {
            width: 100% !important;
          }
    
          .u-col>div {
            margin: 0 auto;
          }
        }
    
        body {
          margin: 0;
          padding: 0;
        }
    
        table,
        tr,
        td {
          vertical-align: top;
          border-collapse: collapse;
        }
    
        .ie-container table,
        .mso-container table {
          table-layout: fixed;
        }
    
        * {
          line-height: inherit;
        }
    
        a[x-apple-data-detectors='true'] {
          color: inherit !important;
          text-decoration: none !important;
        }
    
        table,
        td {
          color: #000000;
        }
    
        #u_body a {
          color: #169179;
          text-decoration: underline;
        }
    
        @media (max-width: 480px) {
          #u_content_heading_1 .v-font-size {
            font-size: 22px !important;
          }
        }
      </style>
    
    
    
      <link href="https://fonts.googleapis.com/css?family=Rubik:400,700&display=swap" rel="stylesheet" type="text/css">
    
    </head>
    
    <body class="clean-body u_body"
      style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: transparent;color: #000000">
    
          <span class="preheader">${options?.preheader}</span>
      <table id="u_body"
        style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: transparent;width:100%"
        cellpadding="0" cellspacing="0">
        <tbody>
          <tr style="vertical-align: top">
            <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
    
    
    
              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                <div class="u-row"
                  style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                  <div
                    style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
    
                    <div class="u-col u-col-100"
                      style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
                      <div
                        style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                        <div
                          style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
    
                          <table id="u_content_heading_1" style="font-family:'Rubik',sans-serif;" role="presentation"
                            cellpadding="0" cellspacing="0" width="100%" border="0">
                            <tbody>
                              <tr>
                                <td
                                  style="overflow-wrap:break-word;word-break:break-word;padding:20px 10px 0px;font-family:'Rubik',sans-serif;"
                                  align="left">
    
                                  <h1 class="v-font-size"
                                    style="margin: 0px; color: #29a587; line-height: 140%; text-align: center; word-wrap: break-word; font-family: 'Rubik',sans-serif; font-size: 30px; font-weight: 700;">
                                    <strong> Halu ${options?.greetings}!</strong>
                                  </h1>
    
                                </td>
                              </tr>
                            </tbody>
                          </table>
    
                        </div>
                      </div>
                    </div>
    
                  </div>
                </div>
              </div>
    
    
    
    
    
              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                <div class="u-row"
                  style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                  <div
                    style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
    
                    <div class="u-col u-col-100"
                      style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
                      <div style="height: 100%;width: 100% !important;">
                        <div
                          style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
    
                          <table style="font-family:'Rubik',sans-serif;" role="presentation" cellpadding="0" cellspacing="0"
                            width="100%" border="0">
                            <tbody>
                              <tr>
                                <td
                                  style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Rubik',sans-serif;"
                                  align="left">
    
                                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                    <tr>
                                      <td style="padding-right: 0px;padding-left: 0px;" align="center">
    
                                        <img align="center" border="0" src="https://www.trishareal.com/assets/emailPics/image-4.png" alt="" title=""
                                          style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 480px;"
                                          width="480" />
    
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
    
              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                <div class="u-row"
                  style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                  <div
                    style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
    
                    <div class="u-col u-col-100"
                      style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
                      <div
                        style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                        <div
                          style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                          <table style="font-family:'Rubik',sans-serif;" role="presentation" cellpadding="0" cellspacing="0"
                            width="100%" border="0">
                            <tbody>
                              <tr>
                                <td
                                  style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Rubik',sans-serif;"
                                  align="left">
    
                                  <div align="center">
                                    <div style="display: table; max-width:152px;">
                                      <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32"
                                        style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 19px">
                                        <tbody>
                                          <tr style="vertical-align: top">
                                            <td align="left" valign="middle"
                                              style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                              <a href="https://www.linkedin.com/in/trishasairenereal/" title="LinkedIn"
                                                target="_blank">
                                                <img src="https://www.trishareal.com/assets/emailPics/image-1.png" alt="LinkedIn" title="LinkedIn" width="32"
                                                  style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                              </a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
    
                                      <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32"
                                        style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 19px">
                                        <tbody>
                                          <tr style="vertical-align: top">
                                            <td align="left" valign="middle"
                                              style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                              <a href="https://github.com/TrishaReal" title="GitHub" target="_blank">
                                                <img src="https://www.trishareal.com/assets/emailPics/image-3.png" alt="GitHub" title="GitHub" width="32"
                                                  style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                              </a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32"
                                      style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 0px">
                                      <tbody>
                                        <tr style="vertical-align: top">
                                          <td align="left" valign="middle"
                                            style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                            <a href="https://www.behance.net/trishasairenereal" title="Behance"
                                              target="_blank">
                                              <img src="https://www.trishareal.com/assets/emailPics/image-2.png" alt="Behance" title="Behance" width="32"
                                                style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                            </a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
  
  
                                  </div>
                                </div>
  
                              </td>
                            </tr>
                          </tbody>
                        </table>
  
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                <div class="u-row"
                  style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                  <div
                    style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
  
                    <div class="u-col u-col-100"
                      style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
                      <div
                        style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  
                        <table style="font-family:'Rubik',sans-serif;" role="presentation" cellpadding="0" cellspacing="0"
                          width="100%" border="0">
                          <tbody>
                            <tr>
                              <td
                                style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Rubik',sans-serif;"
                                align="left">
  
                                <div class="v-font-size"
                                  style="font-size: 16px; line-height: 140%; text-align: center; word-wrap: break-word;">
                                  <p style="line-height: 140%;">© 2023, Offer by  <a rel="noopener"
                                      href="https://www.trishareal.com/" target="_blank">trishareal.com</a></p>
                                </div>
  
                              </td>
                            </tr>
                          </tbody>
                        </table>
  
                      </div>
                    </div>
                  </div>
  
                </div>
              </div>
            </div>
  
  
  
          </td>
        </tr>
      </tbody>
    </table>
  
  </body>
  
  </html>
          `;

    case 'summary':
      return `
      <!DOCTYPE HTML
      PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
      xmlns:o="urn:schemas-microsoft-com:office:office">
    
    <head>
      <!--[if gte mso 9]>
    <xml>
      <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="x-apple-disable-message-reformatting">
      <!--[if !mso]><!-->
      <meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
      <title></title>
    
      <style type="text/css">
        @media only screen and (min-width: 670px) {
          .u-row {
            width: 650px !important;
          }
    
          .u-row .u-col {
            vertical-align: top;
          }
    
          .u-row .u-col-100 {
            width: 650px !important;
          }
    
        }
    
        @media (max-width: 670px) {
          .u-row-container {
            max-width: 100% !important;
            padding-left: 0px !important;
            padding-right: 0px !important;
          }
    
          .u-row .u-col {
            min-width: 320px !important;
            max-width: 100% !important;
            display: block !important;
          }
    
          .u-row {
            width: 100% !important;
          }
    
          .u-col {
            width: 100% !important;
          }
    
          .u-col>div {
            margin: 0 auto;
          }
        }
    
        body {
          margin: 0;
          padding: 0;
        }
    
        table,
        tr,
        td {
          vertical-align: top;
          border-collapse: collapse;
        }
    
        p {
          margin: 0;
        }
    
        .ie-container table,
        .mso-container table {
          table-layout: fixed;
        }
    
        * {
          line-height: inherit;
        }
    
        a[x-apple-data-detectors='true'] {
          color: inherit !important;
          text-decoration: none !important;
        }
    
        table,
        td {
          color: #000000;
        }
    
        #u_body a {
          color: #0000ee;
          text-decoration: underline;
        }
    
        @media (max-width: 480px) {
          #u_content_heading_3 .v-font-size {
            font-size: 24px !important;
          }
    
          #u_content_heading_4 .v-font-size {
            font-size: 20px !important;
          }
    
          #u_content_text_4 .v-font-size {
            font-size: 16px !important;
          }
    
          #u_content_text_4 .v-line-height {
            line-height: 130% !important;
          }
        }
      </style>
    
    
    
      <link href="https://fonts.googleapis.com/css?family=Rubik:400,700&display=swap" rel="stylesheet" type="text/css">
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet" type="text/css">
      <!--<![endif]-->
    
    </head>
    
    <body class="clean-body u_body"
      style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: transparent;color: #000000">
      <span class="preheader">${options?.preheader}</span>
      <table id="u_body"
        style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: transparent;width:100%"
        cellpadding="0" cellspacing="0">
        <tbody>
          <tr style="vertical-align: top">
            <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
    
    
    
              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                <div class="u-row"
                  style="margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                  <div
                    style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
    
                    <div class="u-col u-col-100"
                      style="max-width: 320px;min-width: 650px;display: table-cell;vertical-align: top;">
                      <div style="background-color: #f0ebe3;height: 100%;width: 100% !important;">
    
                        <table id="u_content_heading_3" style="font-family:'Rubik',sans-serif;" role="presentation"
                          cellpadding="0" cellspacing="0" width="100%" border="0">
                          <tbody>
                            <tr>
                              <td
                                style="overflow-wrap:break-word;word-break:break-word;padding:32px 10px 0px;font-family:'Rubik',sans-serif;"
                                align="left">
    
                                <h1 class="v-line-height v-font-size"
                                  style="margin: 0px; color: #29a587; line-height: 140%; text-align: center; word-wrap: break-word; font-family: 'Montserrat',sans-serif; font-size: 33px; font-weight: 700;">
                                  What's up 3sha?!</h1>
    
                              </td>
                            </tr>
                          </tbody>
                        </table>
    
                        <table id="u_content_heading_4" style="font-family:'Rubik',sans-serif;" role="presentation"
                          cellpadding="0" cellspacing="0" width="100%" border="0">
                          <tbody>
                            <tr>
                              <td
                                style="overflow-wrap:break-word;word-break:break-word;padding:20px;font-family:'Rubik',sans-serif;"
                                align="left">
    
                                <h2 class="v-line-height v-font-size"
                                  style="margin: 0px; color: #000000; line-height: 100%; text-align: center; word-wrap: break-word; font-family: 'Rubik',sans-serif; font-size: 20px; font-weight: 700;">
                                  ${options?.greetings}</h2>
    
                              </td>
                            </tr>
                          </tbody>
                        </table>
    
                        <table style="font-family:'Rubik',sans-serif;" role="presentation" cellpadding="0" cellspacing="0"
                          width="100%" border="0">
                          <tbody>
                            <tr>
                              <td
                                style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Rubik',sans-serif;"
                                align="left">
    
                                <div class="v-line-height v-font-size"
                                  style="font-size: 15.5px; line-height: 140%; text-align: center; word-wrap: break-word;">
                                  <p style="line-height: 140%;">${options?.subject}</p>
                                  <p style="line-height: 140%;">${options?.message}</p>
                                </div>
    
                              </td>
                            </tr>
                          </tbody>
                        </table>
    
    
                      </div>
                    </div>
                  </div>
    
                </div>
              </div>
              </div>
    
    
    
    
    
              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                <div class="u-row"
                  style="margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                  <div
                    style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                    <div class="u-col u-col-100"
                      style="max-width: 320px;min-width: 650px;display: table-cell;vertical-align: top;">
                      <div
                        style="background-color: #f0ebe3;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                        <div
                          style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
    
                          <table id="u_content_text_4" style="font-family:'Rubik',sans-serif;" role="presentation"
                            cellpadding="0" cellspacing="0" width="100%" border="0">
                            <tbody>
                              <tr>
                                <td
                                  style="overflow-wrap:break-word;word-break:break-word;padding:25px 20px 30px;font-family:'Rubik',sans-serif;"
                                  align="left">
    
                                  <div class="v-line-height v-font-size"
                                    style="font-size: 17px; line-height: 140%; text-align: center; word-wrap: break-word;">
                                    <p style="line-height: 140%;">${options?.conclusion} <span
                                        style="line-height: 23.8px; color: #29a587 !important;"><strong>
                                          ${options?.emailClient}</strong></span></p>
                                    <p style="line-height: 140%; padding:25px 20px 25px;">${options?.thanks}</p>
                                  </div>
    
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                <div class="u-row"
                  style="margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                  <div
                    style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
    
                    <div class="u-col u-col-100"
                      style="max-width: 320px;min-width: 650px;display: table-cell;vertical-align: top;">
                      <div
                        style="background-color: #29a587;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                        <div
                          style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
    
                          <table style="font-family:'Rubik',sans-serif;" role="presentation" cellpadding="0" cellspacing="0"
                            width="100%" border="0">
                            <tbody>
                              <tr>
                                <td
                                  style="overflow-wrap:break-word;word-break:break-word;padding:35px 10px;font-family:'Rubik',sans-serif;"
                                  align="left">
    
                                  <div class="v-line-height v-font-size"
                                    style="font-size: 14px; color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word;">
                                    <p style="line-height: 140%;">© 2023, Offer by <span
                                        style="color: #ffffff; line-height: 19.6px;"><a rel="noopener"
                                          href="https://www.trishareal.com/" target="_blank" style="color: #ffffff;"><span
                                            style="text-decoration: underline; line-height: 19.6px;"><strong>trishareal.com</strong></span></a></span>
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </body>
    
    </html>
          `;
    default:
      return `
                  <!doctype html>
                  <html>
                  <head>
                      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                      <title>${options?.title}</title>
                      <style>
                      /* -------------------------------------
                          GLOBAL RESETS
                      ------------------------------------- */
                      
                      /*All the styling goes here*/
                      
                      img {
                          border: none;
                          -ms-interpolation-mode: bicubic;
                          max-width: 100%; 
                      }
                  
                      body {
                          background-color: transparent;
  background-image: linear-gradient(0deg, #ffffff 0%, #f8ecdb 100%);
                          font-family: "Jost", sans-serif;
                          -webkit-font-smoothing: antialiased;
                          font-size: 16px;
                          line-height: 1.4;
                          margin: 0;
                          padding: 0;
                          -ms-text-size-adjust: 100%;
                          -webkit-text-size-adjust: 100%; 
                      }
                  
                      table {
                          border-collapse: separate;
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          width: 100%; }
                          table td {
                          font-family: "Jost", sans-serif;
                          font-size: 16px;
                          vertical-align: top; 
                      }
                  
                      /* -------------------------------------
                          BODY & CONTAINER
                      ------------------------------------- */
                  
                      .body {
                          background-color: transparent;
  background-image: linear-gradient(0deg, #ffffff 0%, #f8ecdb 100%);
                          width: 100%; 
                      }
                  
                      /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */
                      .container {
                          display: block;
                          margin: 0 auto !important;
                          /* makes it centered */
                          max-width: 580px;
                          padding: 10px;
                          width: 580px; 
                      }
                  
                      /* This should also be a block element, so that it will fill 100% of the .container */
                      .content {
                          box-sizing: border-box;
                          display: block;
                          margin: 0 auto;
                          max-width: 580px;
                          padding: 10px; 
                      }
                  
                      /* -------------------------------------
                          HEADER, FOOTER, MAIN
                      ------------------------------------- */
                      .main {
                          background: #ffffff;
                          border-radius: 10px;
                          width: 100%; 
                          border: 2px #000 solid;
                      }
                  
                      .wrapper {
                          box-sizing: border-box;
                          padding: 20px;
                          
                      }
                  
                      .content-block {
                          padding-bottom: 10px;
                          padding-top: 10px;
                      }
                  
                      .footer {
                          clear: both;
                          margin-top: 10px;
                          text-align: center;
                          width: 100%; 
                      }
                          .footer td,
                          .footer p,
                          .footer span,
                          .footer a {
                          color: #999999;
                          font-size: 12px;
                          text-align: center; 
                      }
                  
                      /* -------------------------------------
                          TYPOGRAPHY
                      ------------------------------------- */
                      h1,
                      h2,
                      h3,
                      h4 {
                          color: #000000;
                          font-family: "Jost", sans-serif;
                          font-weight: 400;
                          line-height: 1.4;
                          margin: 0;
                          margin-bottom: 30px; 
                      }
                  
                      h1 {
                          font-size: 35px;
                          font-weight: 300;
                          text-align: center;
                          text-transform: capitalize; 
                      }
                  
                      p,
                      ul,
                      ol {
                          font-family: "Jost", sans-serif;
                          font-size: 16px;
                          font-weight: normal;
                          margin: 0;
                          margin-bottom: 15px; 
                      }
                          p li,
                          ul li,
                          ol li {
                          list-style-position: inside;
                          margin-left: 5px; 
                      }
                  
                      a {
                          color: #5C64CF;
                          text-decoration: underline; 
                      }
                  
                      /* -------------------------------------
                          BUTTONS
                      ------------------------------------- */
                      .btn {
                          box-sizing: border-box;
                          width: 100%; }
                          .btn > tbody > tr > td {
                          padding-bottom: 15px; }
                          .btn table {
                          width: auto; 
                      }
                          .btn table td {
                          background-color: #ffffff;
                          border-radius: 5px;
                          text-align: center; 
                      }
                          .btn a {
                          background-color: #ffffff;
                          border: solid 1px #5C64CF;
                          border-radius: 5px;
                          box-sizing: border-box;
                          color: #5C64CF;
                          cursor: pointer;
                          display: inline-block;
                          font-size: 16px;
                          font-weight: bold;
                          margin: 0;
                          padding: 10px 20px;
                          text-decoration: none;
                          text-transform: capitalize; 
                      }
                  
                      .btn-primary table td {
                          background-color: #5C64CF; 
                      }
                  
                      .btn-primary a {
                          background-color: #5C64CF;
                          border-color: #5C64CF;
                          color: #ffffff; 
                      }
                  
                      /* -------------------------------------
                          OTHER STYLES THAT MIGHT BE USEFUL
                      ------------------------------------- */
                      .last {
                          margin-bottom: 0; 
                      }
                  
                      .first {
                          margin-top: 0; 
                      }
                  
                      .align-center {
                          text-align: center; 
                      }
                  
                      .align-right {
                          text-align: right; 
                      }
                  
                      .align-left {
                          text-align: left; 
                      }
                  
                      .clear {
                          clear: both; 
                      }
                  
                      .mt0 {
                          margin-top: 0; 
                      }
                  
                      .mb0 {
                          margin-bottom: 0; 
                      }
                  
                      .preheader {
                          color: transparent;
                          display: none;
                          height: 0;
                          max-height: 0;
                          max-width: 0;
                          opacity: 0;
                          overflow: hidden;
                          mso-hide: all;
                          visibility: hidden;
                          width: 0; 
                      }
                  
                      .powered-by a {
                          text-decoration: none; 
                      }
                  
                      hr {
                          border: 0;
                          border-bottom: 1px solid #f6f6f6;
                          margin: 20px 0; 
                      }
                  
                      /* -------------------------------------
                          RESPONSIVE AND MOBILE FRIENDLY STYLES
                      ------------------------------------- */
                      @media only screen and (max-width: 620px) {
                          table.body h1 {
                          font-size: 28px !important;
                          margin-bottom: 10px !important; 
                          }
                          table.body p,
                          table.body ul,
                          table.body ol,
                          table.body td,
                          table.body span,
                          table.body a {
                          font-size: 16px !important; 
                          }
                          table.body .wrapper,
                          table.body .article {
                          padding: 10px !important; 
                          }
                          table.body .content {
                          padding: 0 !important; 
                          }
                          table.body .container {
                          padding: 0 !important;
                          width: 100% !important; 
                          }
                          table.body .main {
                          border-left-width: 0 !important;
                          border-radius: 0 !important;
                          border-right-width: 0 !important; 
                          }
                          table.body .btn table {
                          width: 100% !important; 
                          }
                          table.body .btn a {
                          width: 100% !important; 
                          }
                          table.body .img-responsive {
                          height: auto !important;
                          max-width: 100% !important;
                          width: auto !important; 
                          }
                      }
                  
                      /* -------------------------------------
                          PRESERVE THESE STYLES IN THE HEAD
                      ------------------------------------- */
                      @media all {
                          .ExternalClass {
                          width: 100%; 
                          }
                          .ExternalClass,
                          .ExternalClass p,
                          .ExternalClass span,
                          .ExternalClass font,
                          .ExternalClass td,
                          .ExternalClass div {
                          line-height: 100%; 
                          }
                          .apple-link a {
                          color: inherit !important;
                          font-family: inherit !important;
                          font-size: inherit !important;
                          font-weight: inherit !important;
                          line-height: inherit !important;
                          text-decoration: none !important; 
                          }
                          #MessageViewBody a {
                          color: inherit;
                          text-decoration: none;
                          font-size: inherit;
                          font-family: inherit;
                          font-weight: inherit;
                          line-height: inherit;
                          }
                          .btn-primary table td:hover {
                          background-color: #34495e !important; 
                          }
                          .btn-primary a:hover {
                          background-color: #34495e !important;
                          border-color: #34495e !important; 
                          } 
                      }
                  
                      </style>
                  </head>
                  <body>
                      <span class="preheader">${options?.preheader}</span>
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body">
                      <tr>
                          <td>&nbsp;</td>
                          <td class="container">
                          <div class="content">
                  
                              <!-- START CENTERED WHITE CONTAINER -->
                              <table role="presentation" class="main">
                  
                              <!-- START MAIN CONTENT AREA -->
                              <tr>
                                  <td class="wrapper">
                                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                      <tr>
                                      <td>
                                          <p>${options?.greetings}</p>
                                          <p>${options?.message}</p>
                                          <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary">
                                              <tbody>
                                                  
                                                  ${(options?.callToAction &&
          options
            ?.callToAction
            ?.active &&
          `<tr>
                                                          <td align="left">
                                                              <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                                                  <tbody>
                                                                      <tr>
                                                                      <td> <a href=${options?.callToAction?.href} target="_blank">${options?.callToAction?.name}</a> </td>
                                                                      </tr>
                                                                  </tbody>
                                                              </table>
                                                          </td>
                                                      </tr>`) ||
        ''
        }
                                                  
                                              </tbody>
                                          </table>
                                          <p>${options?.conclusion}</p>
                                          <p>${options?.thanks}</p>
                                      </td>
                                      </tr>
                                  </table>
                                  </td>
                              </tr>
                  
                              <!-- END MAIN CONTENT AREA -->
                              </table>
                              <!-- END CENTERED WHITE CONTAINER -->
                  
                              <!-- START FOOTER -->
                              <div class="footer">
                                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                      ${(options?.unsubscribe &&
          options?.unsubscribe?.active &&
          `<tr>
                                              <td class="content-block">
                                                  <span class="apple-link"></span>
                                                  <br> ${options?.unsubscribe?.message} <a href=${options?.unsubscribe?.href}>${options?.unsubscribe?.name}</a>.
                                              </td>
                                          </tr>`) ||
        ''
        }
                                      ${(options?.footer &&
          options?.footer?.active &&
          `<tr>
                                              <td class="content-block powered-by">
                                                  ${options?.footer?.name} <a href=${options?.footer?.href}>${options?.footer?.message}</a>.
                                              </td>
                                          </tr>`) ||
        ''
        }
                                  </table>
                              </div>
                              <!-- END FOOTER -->
                  
                          </div>
                          </td>
                          <td>&nbsp;</td>
                      </tr>
                      </table>
                  </body>
                  </html>
              
          `;
  }
};

export default fillTemplate;
