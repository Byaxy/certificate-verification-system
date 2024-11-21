

const QuickGuide = () =>{
  return (
    <div className="max-w-4xl mx-auto p-6 my-8 bg-white shadow-md rounded-lg">
      <h1 className="sm:text-3xl text-2xl font-bold text-gray-800 sm:mb-6 mb-3">
        Quick Guide for Administrators
      </h1>

      {/* Section 1: Certificate Management */}
      <section className="mb-8">
        <h2 className="sm:text-2xl text-xl font-semibold text-blue-600 mb-4">
          Certificate Management
        </h2>
        <p className="text-gray-700 mb-2">
          Manage all uploaded certificates efficiently with the following
          options:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>
            <strong>Add Certificates:</strong> Use the <em>&quot;Add Certificate&quot;</em> form to upload individual certificates.
          </li>
          <li>
            <strong>Edit Certificates:</strong> Select certificates to modify details such as name or issue date.
          </li>
          <li>
            <strong>Delete Certificates:</strong> Remove outdated or invalid certificates.
          </li>
          <li>
            <strong>Bulk Upload:</strong> Use the <em>Bulk Upload</em> feature to upload multiple certificates via an Excel file.
          </li>
        </ul>
      </section>

      {/* Section 2: Monitoring Activity */}
      <section className="mb-8">
        <h2 className="sm:text-2xl text-xl font-semibold text-blue-600 mb-4">
          Monitoring Activity
        </h2>
        <p className="text-gray-700 mb-2">
          Stay informed about platform usage and activity:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>
            <strong>Recent Activity:</strong> View recently added certificates and changes made by other admins.
          </li>
          <li>
            <strong>Verification Logs:</strong> Track certificate verification attempts and their statuses (valid/invalid).
          </li>
        </ul>
      </section>

      {/* Section 3: Analytics & Insights */}
      <section className="mb-8">
        <h2 className="sm:text-2xl text-xl font-semibold text-blue-600 mb-4">
          Analytics & Insights
        </h2>
        <p className="text-gray-700 mb-2">
          Use the dashboard to analyze performance and trends:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>
            <strong>Total Certificates:</strong> Monitor the total number of certificates issued.
          </li>
          <li>
            <strong>Total Verification Requests:</strong> Review the number of verifications requested.
          </li>
        </ul>
      </section>

      {/* Section 4: User Roles & Security */}
      <section className="mb-8">
        <h2 className="sm:text-2xl text-xl font-semibold text-blue-600 mb-4">
          User Roles & Security
        </h2>
        <p className="text-gray-700 mb-2">
          Manage access and secure the platform:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>
            <strong>User Management:</strong> Add or remove administrators and assign appropriate roles.
          </li>
          <li>
            <strong>Authentication:</strong> Ensure all admins use secure login credentials.
          </li>
        </ul>
      </section>

      {/* Section 5: Common Operations */}
      <section className="mb-8">
        <h2 className="sm:text-2xl text-xl font-semibold text-blue-600 mb-4">
          Common Operations
        </h2>
        <p className="text-gray-700 mb-2">
          Frequently used actions on the platform:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>
            <strong>Search Certificates:</strong> Use filters (e.g., name, issue date) to locate certificates quickly.
          </li>
          <li>
            <strong>Export Data:</strong> Export certificate data in Excel formats.
          </li>
          <li>
            <strong>Notifications:</strong> Check notifications for system updates or pending actions.
          </li>
        </ul>
      </section>

      {/* Help Section */}
      <section>
        <h2 className="sm:text-2xl text-xl font-semibold text-blue-600 mb-4">
          Need Help?
        </h2>
        <p className="text-gray-700">
          If you encounter any issues or have questions, contact support or refer to the detailed administrator documentation.
        </p>
      </section>
    </div>
  );
}

export default QuickGuide;
