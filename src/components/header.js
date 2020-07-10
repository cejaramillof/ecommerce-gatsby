import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { MenuItem, StyledHeader } from '../styles/components'

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Link to="/">
      <img src="http://web-worx.co/wp-content/uploads/2018/11/woocommerce-vector-logo-1-150x150.png" alt="logoswag" />
    </Link>
    <nav>
      <ul>
        <MenuItem margin>
          <Link to="/">Productos</Link></MenuItem>
        <MenuItem margin>
          <Link to="http://google.com">Google</Link></MenuItem>
        <MenuItem>
          <Link to="/cart">
            <span><img src="https://i.postimg.cc/L6wpMxLt/cart.png" alt="cartlogo" /></span>
          </Link>
        </MenuItem>
      </ul>
    </nav>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
