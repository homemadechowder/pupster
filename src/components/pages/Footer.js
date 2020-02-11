import React from "react";

const footerStyle = {
    backgroundColor: "lightblue",
    height: '10vh'
}

function Footer(){
    return(
    <footer style = {footerStyle} className="page-footer font-small blue">
        <div className="footer-copyright text-center py-3">© 2020 Copyright:
            <a href="https://www.google.com"> Google </a>
        </div>
    </footer>
    );
}

export default Footer;