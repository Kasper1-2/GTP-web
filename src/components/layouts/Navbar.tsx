import { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaDiscord,
} from "react-icons/fa";
import logoImg from "../../assets/GTP-logo.png";

const pages = ["Home", "About", "Drivers", "Gallery"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const section = document.getElementById("home");
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: scrolled ? "rgba(0,0,0,0.7)" : "#000",
        boxShadow: scrolled ? "0 2px 6px rgba(0,0,0,0.3)" : "none",
        paddingY: 1,
        zIndex: 1100,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", maxWidth: "1280px", width: "100%", mx: "auto" }}>
        
        {/* LEFT: Logo or Socials */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {scrolled ? (
            <a href="#home">
              <img src={logoImg} alt="GTP Logo" style={{ height: 40 }} />
            </a>
          ) : (
            <Box sx={{ display: "flex", gap: 1, color: "#fff" }}>
              <a href="https://www.youtube.com/@GranTurismoPanama" target="_blank" rel="noreferrer"><FaYoutube /></a>
              <a href="https://www.instagram.com/gt_panama/" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href="https://www.facebook.com/gtpanama/" target="_blank" rel="noreferrer"><FaFacebook /></a>
              <a href="https://discord.gg/jePnErWt" target="_blank" rel="noreferrer"><FaDiscord /></a>
            </Box>
          )}
        </Box>

        {/* CENTER: Nav Links */}
        {!isMobile && (
          <Box sx={{ display: "flex", gap: 3 }}>
            {pages.map((page) => (
              <Button
                key={page}
                href={`#${page.toLowerCase()}`}
                sx={{ color: "#fff", fontWeight: 500 }}
              >
                {page}
              </Button>
            ))}
          </Box>
        )}

        {/* RIGHT: Hamburger */}
        {isMobile && (
          <Box>
<IconButton
  size="large"
  edge="start"
  color="inherit"
  aria-label="menu"
  onClick={handleOpenNavMenu}
  sx={{ display: { xs: 'flex', md: 'none' },}}
>              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <a href={`#${page.toLowerCase()}`} style={{ textDecoration: "none", color: "inherit" }}>
                      {page}
                    </a>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
