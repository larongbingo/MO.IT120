import { useState, type FormEvent } from "react";
import logo from "../assets/Logo.png";
import { useAuth0 } from "@auth0/auth0-react";
import { type NewUserDto, createConnectlyProfile } from "../api";
import { useNavigate } from "react-router-dom";


export default function FirstTimeLoginPage() {
  const { user, getAccessTokenSilently } = useAuth0();
  const navigate = useNavigate();

  const [displayName, setDisplayName] = useState("");
  const [title, setTitle] = useState("");
  const [major, setMajor] = useState("");
  const [year, setYear] = useState("");
  const [school, setSchool] = useState("");
  const [saved, setSaved] = useState(false);
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const years = [
    "Freshman",
    "Sophomore",
    "Junior",
    "Senior",
    "Graduate",
    "PhD Candidate",
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!displayName.trim()) errs.displayName = "Display name is required";
    if (!title.trim()) errs.title = "Title is required";
    if (!major.trim()) errs.major = "Major is required";
    if (!year.trim()) errs.year = "Year is required";
    if (!school.trim()) errs.school = "School is required";
    return errs;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setAttemptedSubmit(true);
    const errors = validate();
    if (Object.keys(errors).length > 0) return;

    const payload: NewUserDto = { displayName, title, major, year, school };
    console.log("New user payload:", payload);
    setSaved(true);
    getAccessTokenSilently()
        .then((token) => createConnectlyProfile(token, payload))
        .then(profile => {
            if (profile) {
                console.log("Profile created successfully:", profile);
                navigate("/app");
            }
        })
  };

  return (
    <main className="w-full min-h-screen bg-white text-gray-800">
      <div className="max-w-3xl mx-auto p-6">
        <header className="flex items-center gap-4 mb-6">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <div>
            <h1 className="text-xl font-semibold">Welcome to Connectly</h1>
            <p className="text-sm text-gray-500">Let's set up your profile so others can find you.</p>
          </div>
        </header>

        <section className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0 w-full md:w-48 flex flex-col items-center text-center">
            <img
              src={user?.picture ?? "/assets/User.png"}
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover border border-gray-200"
            />
            <div className="mt-3">
              <div className="font-medium">{user?.name ?? "Your Name"}</div>
              <div className="text-sm text-gray-500">{user?.email ?? "you@school.edu"}</div>
            </div>
          </div>

          <form className="flex-1" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Display Name</label>
                <input
                  className="mt-1 w-full border border-gray-200 rounded-md p-2"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, displayName: true }))}
                  placeholder="How should others see you?"
                  required
                />
                {((attemptedSubmit || touched.displayName) && validate().displayName) && (
                  <div className="text-sm text-red-600 mt-1">{validate().displayName}</div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  className="mt-1 w-full border border-gray-200 rounded-md p-2"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, title: true }))}
                  placeholder="e.g., Student, TA, Research Assistant"
                />
                {((attemptedSubmit || touched.title) && validate().title) && (
                  <div className="text-sm text-red-600 mt-1">{validate().title}</div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Major</label>
                <input
                  className="mt-1 w-full border border-gray-200 rounded-md p-2"
                  value={major}
                  onChange={(e) => setMajor(e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, major: true }))}
                  placeholder="Your major"
                />
                {((attemptedSubmit || touched.major) && validate().major) && (
                  <div className="text-sm text-red-600 mt-1">{validate().major}</div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Year</label>
                <select
                  className="mt-1 w-full border border-gray-200 rounded-md p-2 bg-white"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, year: true }))}
                >
                  <option value="">Select year</option>
                  {years.map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
                {((attemptedSubmit || touched.year) && validate().year) && (
                  <div className="text-sm text-red-600 mt-1">{validate().year}</div>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">School</label>
                <input
                  className="mt-1 w-full border border-gray-200 rounded-md p-2"
                  value={school}
                  onChange={(e) => setSchool(e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, school: true }))}
                  placeholder="Your university or college"
                  required
                />
                {((attemptedSubmit || touched.school) && validate().school) && (
                  <div className="text-sm text-red-600 mt-1">{validate().school}</div>
                )}
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                disabled={Object.keys(validate()).length > 0}
              >
                Save Profile
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}