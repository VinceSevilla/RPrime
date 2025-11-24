import { useEffect } from "react";

const Analytics = () => {
  useEffect(() => {
    // Load the GA script
    console.log("GA script is mounting");
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-PMWNNFFFJR";
    script.async = true;
    document.head.appendChild(script);

    // Initialize GA
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-PMWNNFFFJR');
    console.log("GA initialized");

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default Analytics;
