import logo_footer from '../assets/logo_footer.png'

function Footer() {
  return (
    <footer>
      <img src={logo_footer} alt="Logo de Kasa" />
      <p className="size-secondary font-primary">
        © 2020 Kasa. All rights reserved
      </p>
    </footer>
  )
}

export default Footer
