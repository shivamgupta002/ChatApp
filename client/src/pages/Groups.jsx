import { memo, useState } from "react";
import {
  Box,
  Drawer,
  Grid,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  KeyboardBackspace as KeyboardBackspaceButton,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { matBlack } from "../constants/color";
import { Link } from "../components/styles/StylesComponents";
import { SampleChats } from "../constants/sampleData";
import AvatarCard from "../components/shared/AvatarCard";
import { useNavigate } from "react-router-dom";

const Groups = () => {
  const navigate = useNavigate();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigateBack = () => {
    navigate("/");
  };
  const handleMobile = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleMobileClose = () => {
    setIsMobileMenuOpen(false);
  };

  const iconButtons = (
    <>
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "none",
            position: "fixed",
            right: "1rem",
            top: "1rem",
          },
        }}
      >
        <IconButton onClick={handleMobile}>
          <MenuIcon />
        </IconButton>
      </Box>
      <Tooltip title="back">
        <IconButton
          sx={{
            position: "absolute",
            top: "2rem",
            left: "2rem",
            bgcolor: matBlack,
            color: "white",
            ":hover": {
              bgcolor: "rgba(0,0,0,0.7)",
            },
          }}
          onClick={navigateBack}
        >
          <KeyboardBackspaceButton />
        </IconButton>
      </Tooltip>
    </>
  );

  return (
    <>
      <Grid container height={"100vh"}>
        <Grid
          item
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
          }}
          sm={4}
          bgcolor={"bisque"}
        >
          <GroupList myGroups={SampleChats} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            padding: "1rem 3rem",
          }}
        >
          {iconButtons}
        </Grid>
        <Drawer
          open={isMobileMenuOpen}
          onClose={handleMobileClose}
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
          }}
        >
          {/* <GroupList /> */}
        </Drawer>
      </Grid>
    </>
  );
};

const GroupList = ({ width = "100%", myGroups = [], chatId }) => (
  <Stack>
    {myGroups.length > 0 ? (
      myGroups.map((group) => (
        <GroupListItem group={group} chatId={chatId} key={group._id} />
      ))
    ) : (
      <Typography padding={"1rem"} textAlign={"center"}>
        No Group found
      </Typography>
    )}
  </Stack>
);

const GroupListItem = memo(({ group, chatId }) => {
  const { name, avatar, _id } = group;
  return (
    <Link>
      <Stack>
        <AvatarCard avatar={avatar} />
        <Typography>{name}</Typography>
      </Stack>
    </Link>
  );
});
export default Groups;
