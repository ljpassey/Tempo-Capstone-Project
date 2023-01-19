import React, { useEffect, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import { firestore } from "../../Firebase";

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
import AnimateButton from "components/@extended/AnimateButton";

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
import { useFirestoreCollectionMutation } from "@react-query-firebase/firestore";

//mutation and document creation

const CreateJobForm = () => {
  const ref = collection(db, "jobs");
  const mutation = useFirestoreCollectionMutation(ref);
  const uID = sessionStorage.getItem("uID Token");
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        display: "column",
        height: "100%",
        justifyContent: "space-evenly",
        width: "100%",
      }}
    >
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
          console.log(values);
          mutation.mutate({
            jobTitle: values.jobTitle,
            jobDate: values.jobDate,
            jobTime: values.jobTime,
            jobType: values.jobType,
            officeName: values.officeName,
            officeAddress: values.officeAddress,
            payRate: values.payRate,
            contactName: values.contactName,
            contactNumber: values.contactNumber,
            contactEmail: values.contactEmail,
            createdAt: serverTimestamp(),
            createdBy: uID,
          });

          navigate("/dashboard/jobs")
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
                  <InputLabel htmlFor="jobDate-creation">Job Date*</InputLabel>
                  <OutlinedInput
                    id="jobDate"
                    type="jobDate"
                    value={values.jobDate}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Insert Job Date"
                    fullwidth
                    error={Boolean(touched.jobTitle && errors.jobTitle)}
                  />
                  {touched.jobTitle && errors.jobTitle && (
                    <FormHelperText error id="helper-text-jobDate-creation">
                      {errors.jobDate}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="jobTime-creation">Job Time*</InputLabel>
                  <OutlinedInput
                    id="jobTime"
                    type="jobTime"
                    value={values.jobTime}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Insert Job Time"
                    fullwidth
                    error={Boolean(touched.jobTime && errors.jobTime)}
                  />
                  {touched.jobTime && errors.jobTime && (
                    <FormHelperText error id="helper-text-jobTime-creation">
                      {errors.jobTime}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="jobType-creation">Job Type*</InputLabel>
                  <OutlinedInput
                    id="jobType"
                    type="jobType"
                    value={values.jobType}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Insert Job Type"
                    fullwidth
                    error={Boolean(touched.jobType && errors.jobType)}
                  />
                  {touched.jobType && errors.jobType && (
                    <FormHelperText error id="helper-text-jobType-creation">
                      {errors.jobType}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="officeName-creation">
                    Office Name*
                  </InputLabel>
                  <OutlinedInput
                    id="officeName"
                    type="officeName"
                    value={values.officeName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Insert Office Name"
                    fullwidth
                    error={Boolean(touched.officeName && errors.officeName)}
                  />
                  {touched.officeName && errors.officeName && (
                    <FormHelperText error id="helper-text-officeName-creation">
                      {errors.officeName}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="officeAddress-creation">
                    Office Address*
                  </InputLabel>
                  <OutlinedInput
                    id="officeAddress"
                    type="officeAddress"
                    value={values.officeAddress}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Insert Office Address"
                    fullwidth
                    error={Boolean(
                      touched.officeAddress && errors.officeAddress
                    )}
                  />
                  {touched.officeAddress && errors.officeAddress && (
                    <FormHelperText
                      error
                      id="helper-text-officeAddress-creation"
                    >
                      {errors.officeAddress}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="payRate-creation">Pay Rate*</InputLabel>
                  <OutlinedInput
                    id="payRate"
                    type="payRate"
                    value={values.payRate}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Insert Pay Rate"
                    fullwidth
                    error={Boolean(touched.payRate && errors.payRate)}
                  />
                  {touched.payRate && errors.payRate && (
                    <FormHelperText error id="helper-text-payRate-creation">
                      {errors.payRate}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="contactName-creation">
                    Contact Name*
                  </InputLabel>
                  <OutlinedInput
                    id="contactName"
                    type="contactName"
                    value={values.contactName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Insert Job Type"
                    fullwidth
                    error={Boolean(touched.contactName && errors.contactName)}
                  />
                  {touched.contactName && errors.contactName && (
                    <FormHelperText error id="helper-text-contactName-creation">
                      {errors.contactName}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="contactNumber-creation">
                    Contact Number*
                  </InputLabel>
                  <OutlinedInput
                    id="contactNumber"
                    type="contactNumber"
                    value={values.contactNumber}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Insert Contact Number"
                    fullwidth
                    error={Boolean(
                      touched.contactNumber && errors.contactNumber
                    )}
                  />
                  {touched.contactNumber && errors.contactNumber && (
                    <FormHelperText
                      error
                      id="helper-text-contactNumber-creation"
                    >
                      {errors.contactNumber}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="contactEmail-creation">
                    Contact Email*
                  </InputLabel>
                  <OutlinedInput
                    id="contactEmail"
                    type="contactEmail"
                    value={values.contactEmail}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Insert Contact Email"
                    fullwidth
                    error={Boolean(touched.contactEmail && errors.contactEmail)}
                  />
                  {touched.contactEmail && errors.contactEmail && (
                    <FormHelperText
                      error
                      id="helper-text-contactEmail-creation"
                    >
                      {errors.contactEmail}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <AnimateButton>
                  <Button
                    disableElevation
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Submit
                  </Button>
                </AnimateButton>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default CreateJobForm;
