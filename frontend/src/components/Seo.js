import { Helmet, HelmetProvider } from "react-helmet-async";

const SEO = ({ title, titleTemplate, description,favicon }) => {

    const defaultProps = {
        title: "E-Commerce",
        titleTemplate: "Home Page",
        description: "Ecommerce Website meta description",
        favicon: "./favicon.ico"
    };
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <link rel="icon" href={favicon? favicon :defaultProps.favicon} />
                <title>
                {title? title :defaultProps.title} | {titleTemplate? titleTemplate :defaultProps.titleTemplate}
                </title>
                <meta name="description" content={description? description :defaultProps.description} />
            </Helmet>
        </HelmetProvider>
    );
};

export default SEO;