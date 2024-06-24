import { Helmet, HelmetProvider } from "react-helmet-async";
import { useSetting } from "../utils/setting-utils";

const SEO = ({ titleTemplate }) => {

    const defaultProps = {
        title: "E-Commerce",
        titleTemplate: "Home Page",
        description: "Ecommerce Website meta description",
        favicon: "./favicon.webp"
    };

    const seo=useSetting("seo");
    console.log(seo);



    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <link rel="icon" href={seo.favicon? seo.favicon[1].url :defaultProps.favicon} />
                <title>
                {seo.title ? seo.title :defaultProps.title} | {titleTemplate? titleTemplate :defaultProps.titleTemplate}
                </title>
                <meta name="description" content={seo.description? seo.description :defaultProps.description} />
            </Helmet>
        </HelmetProvider>
    );
};

export default SEO;