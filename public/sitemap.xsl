<?xml version="1.0" encoding="UTF-8"?>
<!-- Arkusz stylów mapy strony (/sitemap.xml): tabela adresów w przeglądarce, jak mapa Yoast w oryginale. -->
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  exclude-result-prefixes="sitemap xhtml">
  <xsl:output method="html" encoding="UTF-8" indent="yes" />
  <xsl:template match="/">
    <html lang="pl">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Mapa strony XML – Indoor Play Concept</title>
        <style>
          body { margin: 0; padding: 24px 16px; font: 13px/1.5 Helvetica, Arial, sans-serif; color: #545353; background: #fff; }
          #content { max-width: 1140px; margin: 0 auto; }
          h1 { margin: 0 0 12px; font-size: 24px; color: #212121; }
          .expl { margin: 0 0 14px; }
          .expl a { color: #212121; font-weight: 600; }
          table { width: 100%; border: none; border-collapse: collapse; }
          th, td { padding: 6px 8px; font-size: 12px; text-align: left; vertical-align: top; }
          thead th { border-bottom: 1px solid #212121; color: #212121; }
          tbody tr:nth-child(odd) td { background: #f2f2f2; }
          tbody tr:hover td { background: #e2e2e2; }
          td a { color: #212121; text-decoration: none; word-break: break-all; }
          td a:hover { text-decoration: underline; }
          .lang a { display: inline-block; margin-right: 6px; text-transform: uppercase; }
          .date { white-space: nowrap; }
        </style>
      </head>
      <body>
        <div id="content">
          <h1>Mapa strony XML</h1>
          <p class="expl">
            Ta mapa strony w formacie XML jest przeznaczona dla wyszukiwarek (Google, Bing). Więcej o mapach stron
            na <a href="https://www.sitemaps.org/pl/" target="_blank" rel="noopener">sitemaps.org</a>.
          </p>
          <p class="expl">
            Mapa zawiera <xsl:value-of select="count(sitemap:urlset/sitemap:url)" /> adresów URL.
          </p>
          <table>
            <thead>
              <tr>
                <th style="width: 62%">Adres URL</th>
                <th style="width: 22%">Wersje językowe</th>
                <th style="width: 16%">Ostatnia modyfikacja</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td>
                    <a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc" /></a>
                  </td>
                  <td class="lang">
                    <xsl:for-each select="xhtml:link">
                      <a href="{@href}" title="{@href}"><xsl:value-of select="@hreflang" /></a>
                    </xsl:for-each>
                  </td>
                  <td class="date">
                    <xsl:value-of select="concat(substring(sitemap:lastmod, 1, 10), ' ', substring(sitemap:lastmod, 12, 5))" />
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
