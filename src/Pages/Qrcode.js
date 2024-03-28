import qr from '../Assets/btlltw.png'
function Qrcode() {
    return ( 
        <div className='qr'>
        <img className='qrcode' alt='qr' src={qr} />
        </div>
     );
}

export default Qrcode;