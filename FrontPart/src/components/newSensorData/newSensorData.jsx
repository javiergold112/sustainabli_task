import { Formik, Form, Field } from "formik";
import { useNewSensorData } from "../../core/hooks/newSensorData/newSensorData";
import * as Yup from "yup";

function NewSensorData() {
  const { mutate: createSensorData, isLoading, isPending } = useNewSensorData();

  const initialValues = {
    sensorId: "",
    deviceType: "window_sash_sensor",
    location: "",
    sashHeight: 0,
    status: "OPEN",
    temperature: 22.5,
    humidity: 45,
  };

  const validationSchema = Yup.object({
    sensorId: Yup.string()
      .required("Sensor ID is required")
      .min(3, "Sensor ID must be at least 3 characters"),
    deviceType: Yup.string()
      .required("Device type is required")
      .oneOf(["window_sash_sensor"], "Invalid device type"),
    location: Yup.string()
      .required("Location is required")
      .min(2, "Location must be at least 2 characters"),
    sashHeight: Yup.number()
      .required("Sash height is required")
      .min(0, "Sash height cannot be negative")
      .max(100, "Sash height cannot exceed 100"),
    status: Yup.string()
      .required("Status is required")
      .oneOf(["OPEN", "CLOSED"], "Invalid status"),
    temperature: Yup.number()
      .required("Temperature is required")
      .min(-50, "Temperature cannot be below -50°C")
      .max(100, "Temperature cannot exceed 100°C"),
    humidity: Yup.number()
      .required("Humidity is required")
      .min(0, "Humidity cannot be negative")
      .max(100, "Humidity cannot exceed 100%"),
  });

  const handleSubmit = (values) => {
    createSensorData(values);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">New Sensor Data</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="space-y-4">
            <div>
              <label
                htmlFor="sensorId"
                className="block text-sm font-medium text-gray-700"
              >
                Sensor ID
              </label>
              <Field
                type="text"
                name="sensorId"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.sensorId && touched.sensorId && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.sensorId}
                </div>
              )}
            </div>

            <div>
              <label
                htmlFor="deviceType"
                className="block text-sm font-medium text-gray-700"
              >
                Device Type
              </label>
              <Field
                type="text"
                name="deviceType"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.deviceType && touched.deviceType && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.deviceType}
                </div>
              )}
            </div>

            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
              >
                Location
              </label>
              <Field
                type="text"
                name="location"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.location && touched.location && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.location}
                </div>
              )}
            </div>

            <div>
              <label
                htmlFor="sashHeight"
                className="block text-sm font-medium text-gray-700"
              >
                Sash Height
              </label>
              <Field
                type="number"
                name="sashHeight"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.sashHeight && touched.sashHeight && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.sashHeight}
                </div>
              )}
            </div>

            <div>
              <label
                htmlFor="status"
                className="block text-sm font-medium text-gray-700"
              >
                Status
              </label>
              <Field
                as="select"
                name="status"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="OPEN">OPEN</option>
                <option value="CLOSED">CLOSED</option>
              </Field>
              {errors.status && touched.status && (
                <div className="text-red-500 text-sm mt-1">{errors.status}</div>
              )}
            </div>

            <div>
              <label
                htmlFor="temperature"
                className="block text-sm font-medium text-gray-700"
              >
                Temperature (°C)
              </label>
              <Field
                type="number"
                step="0.1"
                name="temperature"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.temperature && touched.temperature && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.temperature}
                </div>
              )}
            </div>

            <div>
              <label
                htmlFor="humidity"
                className="block text-sm font-medium text-gray-700"
              >
                Humidity (%)
              </label>
              <Field
                type="number"
                name="humidity"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.humidity && touched.humidity && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.humidity}
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-200 disabled:cursor-not-allowed"
            >
              {isPending ? "Submitting..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default NewSensorData;
