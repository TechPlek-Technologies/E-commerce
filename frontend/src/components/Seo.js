import { Helmet, HelmetProvider } from "react-helmet-async";
import { useSetting } from "../utils/setting-utils";

const SEO = ({ titleTemplate }) => {

    const defaultProps = {
        title: "E-Commerce",
        titleTemplate: "Home Page",
        description: "Ecommerce Website meta description",
        favicon: "./favicon.ico"
    };

    const seo=useSetting("seo");

const { description = '', image: favicon = '', keyword = '', title = '' } = seo || {};

    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <link rel="icon" href={favicon? favicon[0].url :defaultProps.favicon} />
                <title>
                {title ? title :defaultProps.title} | {titleTemplate? titleTemplate :defaultProps.titleTemplate}
                </title>
                <meta name="description" content={description? description :defaultProps.description} />
            </Helmet>
        </HelmetProvider>
    );
};

export default SEO;