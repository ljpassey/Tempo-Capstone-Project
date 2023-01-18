import React from "react";

//MUI
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  Link,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  Switch,
  FormControlLabel,
  Select,
  MenuItem,
} from "@mui/material";

//Third Party
import * as Yup from "yup";
import { Formik } from "formik";

//Firestore
import {
  doc,
  onSnapshot,
  updateDoc,
  setDoc,
  deleteDoc,
  collection,
  serverTimestamp,
  getDocs,
  query,
  where,
  orderBy,
  limit,
} from "firebase/firestore";
import db from "../../Firebase";
import { v4 as uuidv4 } from "uuid";

const CreateJobForm = () => {
  return (
    <Box sx={{ display: 'column', height: '100%', justifyContent: 'space-evenly', width: '100%' }}>
      <Formik
        initialValues={{
          jobTitle: "",
          jobDate: "",
          jobTime: "",
          jobType: "",
          officeName: "",
          officeAddress: "",
          payRate: "",
          contactName: "",
          contactNumber: "",
          contactEmail: "",
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          jobTitle: Yup.string().max(255).required("Job Title is required"),
          jobDate: Yup.string().max(255).required("Job Date is required"),
          jobTime: Yup.string().max(255).required("Job Time is required"),
          jobType: Yup.string().max(255).required("Job Type is required"),
          officeName: Yup.string().max(255).required("Office Name is required"),
          officeAddress: Yup.string()
            .max(255)
            .required("Office Address is required"),
          payRate: Yup.string().max(255).required("Pay Rate is required"),
          contactName: Yup.string()
            .max(255)
            .required("Contact Name is required"),
          contactNumber: Yup.string()
            .max(255)
            .required("Contact Number is required"),
          contactEmail: Yup.string()
            .email("Must be a valid email")
            .max(255)
            .required("Contact Email is required"),
        })}
        onSubmit={async (values, {}) => {
          try {
            console.log(values);
          } catch {}
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="jobTitle-creation">
                    Job Title*
                  </InputLabel>
                  <OutlinedInput
                    id="jobTitle"
                    type="jobTitle"
                    value={values.jobTitle}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Insert Job Title"
                    fullwidth="true"
                    error={Boolean(touched.jobTitle && errors.jobTitle)}
                  />
                  {touched.jobTitle && errors.jobTitle && (
                    <FormHelperText error id="helper-text-jobTitle-creation">
                      {errors.jobTitle}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="jobTitle-creation">
                    Job Title*
                  </InputLabel>
                  <OutlinedInput
                    id="jobTitle"
                    type="jobTitle"
                    value={values.jobTitle}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Insert Job Title"
                    fullwidth
                    error={Boolean(touched.jobTitle && errors.jobTitle)}
                  />
                  {touched.jobTitle && errors.jobTitle && (
                    <FormHelperText error id="helper-text-jobTitle-creation">
                      {errors.jobTitle}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="jobTitle-creation">
                    Job Title*
                  </InputLabel>
                  <OutlinedInput
                    id="jobTitle"
                    type="jobTitle"
                    value={values.jobTitle}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Insert Job Title"
                    fullwidth
                    error={Boolean(touched.jobTitle && errors.jobTitle)}
                  />
                  {touched.jobTitle && errors.jobTitle && (
                    <FormHelperText error id="helper-text-jobTitle-creation">
                      {errors.jobTitle}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="jobTitle-creation">
                    Job Title*
                  </InputLabel>
                  <OutlinedInput
                    id="jobTitle"
                    type="jobTitle"
                    value={values.jobTitle}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Insert Job Title"
                    fullwidth
                    error={Boolean(touched.jobTitle && errors.jobTitle)}
                  />
                  {touched.jobTitle && errors.jobTitle && (
                    <FormHelperText error id="helper-text-jobTitle-creation">
                      {errors.jobTitle}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="jobTitle-creation">
                    Job Title*
                  </InputLabel>
                  <OutlinedInput
                    id="jobTitle"
                    type="jobTitle"
                    value={values.jobTitle}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Insert Job Title"
                    fullwidth
                    error={Boolean(touched.jobTitle && errors.jobTitle)}
                  />
                  {touched.jobTitle && errors.jobTitle && (
                    <FormHelperText error id="helper-text-jobTitle-creation">
                      {errors.jobTitle}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default CreateJobForm;
