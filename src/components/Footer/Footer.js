

const Footer = () => {
    return (
        <div className="footer">
            <h1 className='footer-logo'>RECIPES</h1> 
            <div className='footer-sm'>
                    <a  href='https://www.facebook.com/' target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f social"></i></a>
                    <a  href='https://www.instagram.com/' target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram social"></i></a>
                    <a  href='https://www.twitter.com/' target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter social"></i></a>
            </div>
            <a className="credit-img" href="https://fr.freepik.com/photos-gratuite/poisson-legumes-fond-noir_986631.htm#page=4&query=food&position=25&from_view=search&track=sph" target="_blank" rel="noreferrer">Image de Valeria Aksakova</a>
        </div>
    );
};

export default Footer;