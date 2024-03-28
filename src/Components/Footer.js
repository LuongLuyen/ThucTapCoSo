import { FaFacebookF,FaTwitter,FaGoogle,FaInstagram ,FaLinkedinIn ,FaGithub } from "react-icons/fa";
function Footer() {
    return ( 
        <footer className="bg-body-tertiary text-center footer bg-custom">
            <div className="container p-4 pb-0">
                <section className="mb-4">
                <a
                    data-mdb-ripple-init
                    className="btn text-white btn-floating m-1"
                    style={{ backgroundColor: '#3b5998' }}
                    href="#!"
                    role="button"
                >
                   <FaFacebookF />
                </a>
                <a
                    data-mdb-ripple-init
                    className="btn text-white btn-floating m-1"
                    style={{ backgroundColor: '#55acee' }}
                    href="#!"
                    role="button"
                >
                    <FaTwitter/>
                </a>
                <a
                    data-mdb-ripple-init
                    className="btn text-white btn-floating m-1"
                    style={{ backgroundColor: '#dd4b39' }}
                    href="#!"
                    role="button"
                >
                    <FaGoogle/>
                </a>
                <a
                    data-mdb-ripple-init
                    className="btn text-white btn-floating m-1"
                    style={{ backgroundColor: '#ac2bac' }}
                    href="#!"
                    role="button"
                >
                    <FaInstagram/>
                </a>
                <a
                    data-mdb-ripple-init
                    className="btn text-white btn-floating m-1"
                    style={{ backgroundColor: '#0082ca' }}
                    href="#!"
                    role="button"
                >
                    <FaLinkedinIn/>
                </a>
                <a
                    data-mdb-ripple-init
                    className="btn text-white btn-floating m-1"
                    style={{ backgroundColor: '#333333' }}
                    href="#!"
                    role="button"
                >
                    <FaGithub/>
                </a>
                </section>
            </div>
            <div className="text-center p-2 text-color" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2024 Copyright: Luong Luyen
            </div>
            </footer>
    );
}

export default Footer;