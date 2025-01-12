import { Html, Head, Main, NextScript, DocumentContext } from "next/document";


class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const InitialsProps = await Document.getInitialProps(ctx);
        return {...InitialsProps}
    }
    render() {
        return (
            <Html lang='ru'>
              <Head/>
              <body>
              <Main/>
              <NextScript/>
              </body>
            </Html>
        )
    }
}


export default MyDocument;