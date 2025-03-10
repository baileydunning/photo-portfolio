import { Box, Divider, Drawer, Tab, Tabs, Typography, IconButton } from '@mui/material'
import Link from 'next/link'
import { gallery } from '@/data/galleryList'
import { grey } from '@mui/material/colors'
import { useMediaQuery } from '@mui/material'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'

type menuDrawerProps = {
    item: string
    galleries: gallery[]
}

const drawerWidth = 200

// This renders the side menu drawer
// which has one entry for the index page (About)
// and one entry for each gallery.
// The gallery list must be loaded in staticProps and passed in
export default function MenuDrawer(props: menuDrawerProps) {
    const [mobileOpen, setMobileOpen] = useState(false)
    const isMobile = useMediaQuery('(max-width:600px)')

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };

    return (
      <>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ position: 'absolute', top: 0, left: 0, padding: 2, mr: 2, display: { sm: "none" } }} // Show only on mobile
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          id="menu-drawer"
          variant={isMobile ? "temporary" : "permanent"}
          open={isMobile ? mobileOpen : true}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Improves performance on mobile
          }}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          {/* a box for the content - full height with small padding */}
          <Box sx={{ p: 1, height: "100%" }}>
            {/*Site name*, with a little extra space between the divider to make it pretty */}
            <Typography variant="h6" noWrap component="div" align="center">
              <Link
                style={{ color: grey[600], textDecoration: "none" }}
                href="/"
              >
                {" "}
                {process.env.name}{" "}
              </Link>
            </Typography>
            <Divider sx={{ mt: 1 }} />

            {/*The tabs for the index page and each gallery*/}
            <Tabs
              value={props.item}
              variant="scrollable"
              scrollButtons="auto"
              orientation="vertical"
            >
              {/*The index page is a special case, so it is handled separately*/}
              <Tab
                value="about"
                label="About"
                href="/"
                component={Link}
                key="index"
                className="tab-link"
              />

              {/*Each gallery is a tab, with the gallery key as the value, and the gallery title as the label*/}
              {/*We use the next Link to ensure smooth transitions between pages*/}
              {props.galleries.map((item) => (
                <Tab
                  label={item.title}
                  value={item.key}
                  href={item.url}
                  component={Link}
                  key={item.key}
                  className="tab-link"
                />
              ))}
            </Tabs>
          </Box>
        </Drawer>
      </>
    );

}
