'use client';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    message: Yup.string().required('Message is required'),
});

export default function ContactPage() {
    return (
        <div className="mx-auto mt-10 max-w-md rounded-lg bg-white p-6 shadow-md">
            <h1 className="mb-6 text-center text-2xl font-bold">Contact Us</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    message: '',
                }}
                validationSchema={validationSchema}
                onSubmit={async (
                    values,
                    { setSubmitting, resetForm, setStatus }
                ) => {
                    setStatus('Sending...');
                    const res = await fetch('/api/contact', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(values),
                    });
                    if (res.ok) {
                        setStatus('Message sent!');
                        resetForm();
                    } else {
                        setStatus('Failed to send.');
                    }
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting, status }) => (
                    <Form className="space-y-4">
                        <div className="flex gap-2">
                            <div className="w-1/2">
                                <label
                                    className="mb-1 block text-sm font-medium"
                                    htmlFor="firstName"
                                >
                                    First Name:
                                </label>
                                <Field
                                    id="firstName"
                                    name="firstName"
                                    className="w-full rounded border px-3 py-2 focus:border focus:ring focus:outline-none"
                                />
                                <ErrorMessage
                                    name="firstName"
                                    component="div"
                                    className="text-error text-xs"
                                />
                            </div>
                            <div className="w-1/2">
                                <label
                                    className="mb-1 block text-sm font-medium"
                                    htmlFor="lastName"
                                >
                                    Last Name:
                                </label>
                                <Field
                                    id="lastName"
                                    name="lastName"
                                    className="w-full rounded border px-3 py-2 focus:border-blue-400 focus:ring focus:outline-none"
                                />
                                <ErrorMessage
                                    name="lastName"
                                    component="div"
                                    className="text-error text-xs"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                className="mb-1 block text-sm font-medium"
                                htmlFor="email"
                            >
                                Email:
                            </label>
                            <Field
                                id="email"
                                name="email"
                                type="email"
                                className="w-full rounded border px-3 py-2 focus:border-blue-400 focus:ring focus:outline-none"
                            />
                            <ErrorMessage
                                name="email"
                                component="div"
                                className="text-error text-xs"
                            />
                        </div>
                        <div>
                            <label
                                className="mb-1 block text-sm font-medium"
                                htmlFor="message"
                            >
                                Message:
                            </label>
                            <Field
                                as="textarea"
                                id="message"
                                name="message"
                                rows={4}
                                className="w-full rounded border px-3 py-2 focus:border-blue-400 focus:ring focus:outline-none"
                            />
                            <ErrorMessage
                                name="message"
                                component="div"
                                className="text-error text-xs"
                            />
                        </div>
                        <button
                            type="submit"
                            className="primary w-full"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send'}
                        </button>
                        <p className="mt-4 text-center text-sm text-gray-600">
                            {status}
                        </p>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
