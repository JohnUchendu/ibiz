declare module "html-docx-js/dist/html-docx" {
  const HtmlDocx: {
    asBlob: (html: string, options?: any) => Blob;
    asString: (html: string, options?: any) => string;
  };
  export default HtmlDocx;
}
