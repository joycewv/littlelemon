import { VStack, Heading, Box, FormControl, FormLabel, FormErrorMessage, Button } from "@chakra-ui/react";
import { useFormik } from "formik";
/*import { useSubmit } from "react-router-dom";*/
import * as Yup from 'yup';

const BookingForm = () => {
    /*const {submit} = useSubmit*/

 const formik = useFormik({
    initialValues: {
        firstName: "",
        email: "",
        guests: "",
        time:"",
        
    }, /* initialValues use id ="" */
    
    /* onSubmit: (value) => {submit('https://littlelemon.com/reserveatable', values)}, */

    validationSchema: Yup.object({
        firstName: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        guests: Yup.string().min(1,"Must be at least 1 guest").max(10,"Please call us if you have more than 10 guests").required("Required"),
        time: Yup.string().required("Required"),
        
    }),
 });


    return (
        <>
        <h1>Testing: This is a booking form</h1>
        <section
         isDarkBackground
         backgroundColor="#512DA8"
         py={16}
         spacing={8}>
            <VStack w="1024px" p={32} alignItems="flex-start">
                <Heading as="h1" id="booking-form">
                    Reserve a Table
                </Heading>
                <Box p={6} rounded="md" w="100%">
                    <form onSubmit={formik.handleSubmit}>
                        <VStack spacing={4}>
                            <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}>
                                <FormLabel htmlFor="firstName">Name</FormLabel>
                                <input id="firstName" name="firstName" {...formik.getFieldProps("firstName")} />
                                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                                <FormLabel htmlFor="email">Email Address</FormLabel>
                                <input id="email" name="email" type="email" {...formik.getFieldProps("email")}/>
                                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={!!formik.errors.guests && formik.touched.guests}>
                                <FormLabel>Number of guests</FormLabel>
                                <input type="number" placeholder="1" min="1" max="10" id="guests" {...formik.getFieldProps("guests")} />
                                <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Choose date</FormLabel>
                                <input type="date" id="res-date"/>
                            </FormControl>
                            <FormControl isInvalid={!!formik.errors.time && formik.touched.time}>
                                <FormLabel htmlFor="time">Choose time</FormLabel>
                                <select id="time" name="time" {...formik.getFieldProps("time")}>
                                    <option value="18:00">18:00</option>
                                    <option value="19:00">19:00</option>
                                    <option value="20:00">20:00</option>
                                </select>
                                 <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
                            </FormControl>
                            <Button type="submit" colorScheme="yellow" width="full">Make Your Reservation</Button>
                        </VStack>
                    </form>
                </Box>
            </VStack>
        </section>
        </>

    );
}

export default BookingForm;