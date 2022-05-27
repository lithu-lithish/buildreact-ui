import Head from "next/head";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import pic from "../../images/Image.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import ReactDOM from "react-dom";

const Login = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      policy: false,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      firstName: Yup.string().max(255).required("First name is required"),
      lastName: Yup.string().max(255).required("Last name is required"),
      password: Yup.string().max(255).required("Password is required"),
      policy: Yup.boolean().oneOf([true], "This field must be checked"),
    }),
    onSubmit: () => {
      router.push("/");
    },
  });

  return (
    <>
      <Head>
        <title>Login | Material Kit</title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
        }}
      >
        <Container maxWidth="sm">
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography
                variant="h4"
                position="absolute"
                height="43px"
                left="80px"
                top="54px"
                style={{ fontFamily: "MonumentExtended", color: "#011627" }}
                fontStyle="Normal"
                fontWeight="400"
                forntSize="36px"
                lineHeight="43px"
              >
                GYM TRACKER
              </Typography>
              <Typography
                color="textPrimary"
                variant="h4"
                position="absolute"
                height="29px"
                left="230px"
                top="230px"
                style={{
                  fontFamily: "MonumentExtended",
                  color: "#011627",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "24.4px",
                  lineHeight: "29px",
                }}
                font-style="normal"
                font-weight="400"
                line-height="29px"
              >
                Log In
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
                position="absolute"
                width="432px"
                height="29px"
                left="230px"
                top="275px"
              >
                Let's start with some fact about you !
              </Typography>
            </Box>

            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                ml: -1,
                position: "absolute",
                width: "432px",
                height: "29px",
                left: "230px",
                top: "355px",
              }}
            >
              <TextField
                error={Boolean(
                  formik.touched.firstName && formik.errors.firstName
                )}
                fullWidth
                helperText={formik.touched.firstName && formik.errors.firstName}
                label="Username"
                margin="normal"
                name="firstName"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.firstName}
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                style={{ background: "#F5F6F6", borderRight: "8px" }}
              />
            </Box>

            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                ml: -1,
                position: "absolute",
                width: "432px",
                height: "29px",
                left: "230px",
                top: "430px",
              }}
            >
              <TextField
                error={Boolean(
                  formik.touched.password && formik.errors.password
                )}
                fullWidth
                helperText={formik.touched.password && formik.errors.password}
                label="Password"
                margin="normal"
                name="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="password"
                value={formik.values.password}
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                style={{ background: "#F5F6F6", borderRight: "8px" }}
              />
            </Box>

            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                ml: -1,
                position: "absolute",
                width: "432px",
                height: "29px",
                left: "220px",
                top: "500px",
              }}
            >
              <Checkbox
                checked={formik.values.policy}
                name="policy"
                onChange={formik.handleChange}
              />
              <Typography color="textSecondary" variant="body2">
                Remember me{" "}
              </Typography>
            </Box>
            {Boolean(formik.touched.policy && formik.errors.policy) && (
              <FormHelperText error>{formik.errors.policy}</FormHelperText>
            )}
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                ml: -1,
                position: "absolute",
                width: "432px",
                height: "29px",
                left: "230px",
                top: "580px",
              }}
            >
              {/* <Button
                // color="primary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant=""
                style={{
                  background: "#D0FD3E",
                  color: "black",
                  borderRadius: "10px",
                  width: "500px",
                  height: "60px",
                }}
              >
                Log In
              </Button> */}

              <NavLink
                to="/dashboard"
                style={({ isActive }) => ({
                  textDecoration: "none",
                  color: "black",
                  width: "100%",
                  borderRight: isActive ? "4px solid #D0FD3E" : "",
                })}
              >
                <Button
                  // color="primary"
                  disabled={formik.isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant=""
                  style={{
                    background: "#D0FD3E",
                    color: "black",
                    borderRadius: "10px",
                    width: "410px",
                    height: "60px",
                  }}
                >
                  Log In
                </Button>
              </NavLink>
            </Box>
          </form>
        </Container>
        <img
          src={pic}
          style={{
            display: "flex",
            position: "absolute",
            flexDirection: "column",
            width: "50%",
            // left: "795px",
            right: "0px",
            bottom: "0px",
            top: "0px",
          }}
        />
      </Box>
    </>
  );
};

export default Login;
