import {Grid, Stack, Typography} from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PercentImage from '@/components/PercentImage'
import MainFrame from '@/components/MainFrame'
import {InferGetStaticPropsType} from 'next'
import {galleryList} from '@/data/galleryList'
import PersonSearchIcon from '@mui/icons-material/PersonSearch'

// We need to load the list of galleries from the file system
// This is done at build time
export async function getStaticProps() {
    const galleries = galleryList()
    return {
        props: {
            galleries
        }
    }
}

// This is our home / about me page
export default function Index({galleries}: InferGetStaticPropsType<typeof getStaticProps>) {
    const meta = {
        title: 'Bailey Dunning Travel Photography',
        description: 'Artistic and travel photography portfolio by Bailey Dunning',
        url: '/about',
        keywords: 'photography, photos, art, candid street photography, landscape photography, travel photography, black and white photography',
    }

    const date = new Date()
    return (
      <MainFrame meta={meta} galleries={galleries} index="about">
        <Grid container spacing={0} sx={{ display: "flex", width: "100%" }}>
          <Grid item sm={8}>
            {/* Page title */}
            <Typography variant="h2">About Me</Typography>

            {/* Page content */}
            <Typography variant="body1">
              &nbsp; {"I'm"} a curious and adaptable problem-solver with a
              passion for discovering new perspectives. My journey has led me
              across the globe, capturing the essence of different cultures and
              environments, all while learning from every encounter. I thrive at
              the intersection of technology, education, and the outdoors, and I
              believe in using my skills to create meaningful connections and
              experiences. &nbsp;
            </Typography>
            <br />
            <Typography variant="body1">
              As a photographer and traveler, I see the world as a canvas—an
              opportunity to understand, document, and share stories through a
              lens of exploration and authenticity. &nbsp; Whether {"I'm"}{" "}
              hitchhiking through remote landscapes or immersing myself in local
              communities, my goal is always the same: to experience life fully
              and communicate those moments to others.
            </Typography>
            <br />
            <Typography variant="body1">
              This website is where I combine my love for travel and
              photography, my background in technology, as well as my commitment
              to storytelling. I hope to inspire you to see the world through a
              new lens and embrace the beauty in both the big adventures and the
              small moments in between.
            </Typography>
            <br />
            <Typography variant="body1">
              For prints or usage please contact me at{" "}
              <a style={{ color: "coral" }} href="bwdunning@gmail.com">
                bwdunning@gmail.com
              </a>
              .
            </Typography>
            <br />
          </Grid>

          {/*My photo is shown on the left, except for small breaks where it will be scaked*/}
          <Grid item xs={12} sm={4} sx={{ minHeight: "15vh" }}>
            <PercentImage
              src="/images/me.jpg"
              alt="me"
              blur="/images/me-preview.jpg"
              width="80%"
              height="100%"
            />
          </Grid>

          {/*Out social links and signature / watermark are shown side by side, except for very small breaks where they will be stacked*/}
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              alignContent: "center",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <Stack direction="column">
              <Stack direction="row" spacing={1} sx={{ m: 1 }}>
                <InstagramIcon />
                <div>
                  <a
                    style={{ color: "coral" }}
                    target="_insta"
                    href="https://www.instagram.com/_bail3y/"
                  >
                    @_bail3y
                  </a>
                </div>
              </Stack>
              <Stack direction="row" spacing={1} sx={{ m: 1 }}>
                <LinkedInIcon />{" "}
                <a
                  style={{ color: "coral" }}
                  target="_linkedin"
                  href="https://www.linkedin.com/in/baileydunning/"
                >
                  Bailey Dunning
                </a>
              </Stack>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              minHeight: "15vh",
              alignContent: "center",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <PercentImage
              src="/images/logo.png"
              alt="My Logo"
              blur="/images/logo-preview.png"
              width="80%"
              height="100%"
            />
          </Grid>
          {/* Copyright at the bottom */}
          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Typography variant="caption">
              &copy; {date.getFullYear()} Bailey Dunning
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          ></Grid>
        </Grid>
      </MainFrame>
    );
}