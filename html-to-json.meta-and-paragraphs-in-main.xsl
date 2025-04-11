<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                version="1.1"
                exclude-result-prefixes="html">

<xsl:output method="html"
            encoding="UTF-8"
            media-type="text/plain"
            indent="yes"/>

<!-- strip whitespace from whitespace-only nodes -->
<xsl:strip-space elements="*"/>

<xsl:template match="/">
  <xsl:apply-templates/>
</xsl:template>

<!-- handle element nodes -->
<xsl:template match="html">
{
  "title": "<xsl:value-of select="head/title"/>"<xsl:if test="head/meta[@name='keywords']">,
  "keywords": "<xsl:value-of select="head/meta[@name='keywords']/@content"/>"</xsl:if><xsl:if test="head/meta[@name='author']">,
  "author": "<xsl:value-of select="head/meta[@name='author']/@content"/>"</xsl:if><xsl:if test="head/meta[@name='description']">,
  "description": "<xsl:value-of select="head/meta[@name='description']/@content"/>"
  </xsl:if><xsl:if test="body//h1">,
  "h1": "<xsl:value-of select="body//h1[1]"/>"</xsl:if><xsl:if test="body/main">,
  "main" : [
    <xsl:for-each select="body/main/p">"<xsl:value-of select="."/>"<xsl:if test="position() &lt; last()">,
    </xsl:if></xsl:for-each>
  ]</xsl:if>
}
</xsl:template>

</xsl:stylesheet>
