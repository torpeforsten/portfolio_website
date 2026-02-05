import Image from "next/image";
import Link from "next/link";
import ScreenshotsCarousel, {
  type Slide,
} from "../../components/ScreenshotsCarousel";

export const metadata = {
  title: "SafeRoad – Moose Warning App",
  description: "React Native + Firebase app to improve traffic safety.",
};

export default function SafeRoadPage() {
  const slides: Slide[] = [
    {
      src: "/images/saferoad/s1.PNG",
      title: "Login and Register",
      description:
        "The opening view allows the user to log in, create a new account, or continue as a guest. Authentication is handled through Firebase Authentication, ensuring secure login with email and password. The form validates user input, and forgotten passwords can be reset directly in the app. The background image aligns with the app’s theme, setting the tone for road safety and wildlife awareness right from the start.",
    },
    {
      src: "/images/saferoad/s2.PNG",
      title: "Map and Main View",
      description:
        "The main view displays the user’s location and nearby area using an Apple Maps base layer. The user can follow their real-time movement and observe moose sightings or active risk zones nearby. A floating action bar at the bottom enables quick access to reporting sightings, creating hunting areas, or changing the map type. The user’s live location address is also displayed dynamically at the top.",
    },
    {
      src: "/images/saferoad/s3.PNG",
      title: "Navigation Drawer",
      description:
        "From the side menu, users can access key sections: Map View, Moose Sightings, My Reports, Settings, Profile, and Support. The navigation system is built with Expo Router, allowing seamless in-app transitions without reloading views. The structure ensures a clear and consistent navigation experience even as new features are added.",
    },
    {
      src: "/images/saferoad/s4.PNG",
      title: "Report a Moose Sighting",
      description:
        "Sightings are reported directly from the map view. The user selects the animal species, count, and can optionally add a description such as 'cow and calf.' Location is automatically determined via GPS. Once submitted, the data is stored in Firestore, including coordinates, timestamp, and user ID. The view is designed for simplicity and safety, enabling quick reporting even on the go.",
    },
    {
      src: "/images/saferoad/s5.PNG",
      title: "Report a Hunting Area",
      description:
        "Users can define an active hunting area by selecting three points on the map, forming a blue polygon. An expiration time and optional details can be added. The data is saved to Firestore, and the area remains visible only during its active period. This feature allows hunting clubs or individual users to share active hunting zones, improving awareness and safety.",
    },
    {
      src: "/images/saferoad/s6.PNG",
      title: "Sightings and Hunting Areas on Map",
      description:
        "The map combines both user-reported moose sightings and active hunting areas. Sightings are shown as animal icons, while hunting zones are displayed as blue polygons. Users can measure distance to a marker, and administrators can manage test areas or update data in real time. Combining these layers helps visualize local wildlife activity and safety hotspots.",
    },
    {
      src: "/images/saferoad/s7.PNG",
      title: "Sightings and Risk Zones on Map",
      description:
        "The map shows recent moose sightings, active risk zones, and the user’s position with distance indicators. When at least five sightings occur in the same area within a short timeframe, the system automatically generates a red circular risk zone. These zones highlight increased animal movement and can trigger push notifications when the user approaches them. Administrators have tools to manage, test, and remove zones as needed.",
    },
    {
      src: "/images/saferoad/s8.PNG",
      title: "Moose Sightings Analytics",
      description:
        "This view aggregates nearby moose sightings into time periods: under 1h, 12h, 24h, and 48h. Each entry shows species, count, location, timestamp, and description. The newest reports include a small map preview. If there are no older reports, the view clearly indicates it. This data helps assess wildlife movement patterns and supports real-time formation of risk zones.",
    },
  ];

  return (
    <main className="text-white px-4 md:px-8 lg:px-12 py-12 max-w-5xl mx-auto">
     {/* Hero Section – responsive, Android-friendly */}


{/* Full-width Hero Section with dark green top & bottom blend */}
<section className="relative w-screen left-[50%] right-[50%] -mx-[50vw] overflow-hidden mb-10 md:mb-12">
  {/* Aspect ratio responsive */}
  <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] min-h-[260px] md:min-h-[500px]">
    <Image
      src="/images/saferoad/s7.PNG"
      alt="SafeRoad app showing risk zones on map"
      fill
      priority
      className="object-cover brightness-75"
      sizes="100vw"
    />

    {/* Top gradient (dark green → transparent) */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#03110f] via-[#03110f]/60 to-transparent pointer-events-none" />

    {/* Bottom gradient (dark green → transparent) */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#03110f] via-[#03110f]/60 to-transparent pointer-events-none" />

    {/* Content */}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1
          className="
            font-bold text-white drop-shadow-lg [text-wrap:balance]
            leading-tight sm:leading-snug md:leading-normal
            text-[clamp(22px,6vw,48px)] max-[360px]:text-[20px]
          "
        >
          SafeRoad – Moose Warning App
        </h1>

        <p
          className="
            mt-3 md:mt-4 max-w-[40rem] md:max-w-[48rem] text-gray-200 [text-wrap:balance]
            leading-snug sm:leading-normal
            text-[clamp(13px,3.8vw,18px)] max-[360px]:text-[12.5px]
            mx-auto
          "
        >
          Real-time moose sightings and smart road safety alerts — powered by
          community data, geolocation, and Firebase.
        </p>

        <div className="mt-6 md:mt-8 flex flex-wrap gap-2 md:gap-3 justify-center">
          <Link
            href="https://github.com/torpeforsten"
            className="px-4 py-2 md:px-5 md:py-2.5 rounded-lg border border-gray-300 text-white hover:bg-white hover:text-black transition text-sm md:text-base"
          >
            View on GitHub (Not public yet)
          </Link>
        </div>
      </div>
    </div>
  </div>

  {/* Subtle bottom fade to green background */}
  <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#03110f] via-[#03110f]/90 to-transparent pointer-events-none" />
</section>





      {/* Overview */}
      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-bold">Overview</h2>
        <p className="text-gray-300">
          SafeRoad is a React Native–based mobile application designed to
          improve traffic safety by providing real-time wildlife alerts for
          drivers. The app integrates geolocation, Firebase cloud services, and
          community-driven reporting, allowing users to share and receive
          information about moose and other large animal movements.
        </p>
        <p className="text-gray-300">
          Users can add sightings directly from the map, view nearby reports,
          and receive automatic push notifications when approaching active risk
          zones. The app also supports time-based analysis of sightings and
          hunting areas, helping visualize regional wildlife activity.
        </p>
        <p className="text-gray-300">
          The goal of SafeRoad is to introduce a data-driven perspective to
          traffic safety and encourage community collaboration at the
          intersection of nature and transportation.
        </p>
      </section>

      {/* Screenshots */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Screenshots</h2>
        <ScreenshotsCarousel slides={slides} />
      </section>

      {/* Project Background */}
      <section className="mb-12 space-y-4">
        <h2 className="text-2xl font-bold">Project Background</h2>
        <p className="text-gray-300">
          In Finland, wildlife-related traffic accidents pose a significant
          safety risk. Moose collisions are especially common during dusk and
          nighttime hours. Finland’s vast forests and busy highways create ideal
          conditions for such accidents. Over the past five years, there have
          been on average nearly 13,300 wildlife collisions annually, with moose
          accounting for about 11.86% of them. These accidents cause serious
          injuries and substantial economic damage — the average societal cost
          of a single traffic accident is estimated at around €300,000.
        </p>
        <p className="text-gray-300">
          SafeRoad was created to combine community-driven wildlife reporting,
          reliable geospatial data, and intelligent notifications into a single
          mobile experience. The app visualizes where and when wildlife movement
          is most active, helping drivers make safer, more informed decisions on
          the road.
        </p>
      </section>

      {/* System Architecture */}
      <section className="mb-12 space-y-4">
        <h2 className="text-2xl font-bold">System Architecture</h2>
        <p className="text-gray-300">
          The system architecture is designed to be simple, modular, and
          scalable. The mobile app is built with React Native (Expo, TypeScript)
          and communicates with Firebase services in real time.
        </p>
        <div className="grid md:grid-cols-2 gap-6 text-gray-300">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-semibold">Mobile app (iOS):</span> React
              Native + Expo Router, Apple Maps integration, background location
              tracking, and distance calculation.
            </li>
            <li>
              <span className="font-semibold">Authentication:</span> Firebase
              Auth (email/password) with optional guest mode.
            </li>
            <li>
              <span className="font-semibold">Data:</span> Firestore collections
              for sightings{" "}
              <code>{`{ species, count, description, coordinates, createdAt, userId }`}</code>{" "}
              and hunting zones <code>{`{ geometry, endsAt }`}</code>.
            </li>
            <li>
              <span className="font-semibold">Business logic:</span> Cloud
              Functions handle risk-zone generation, data cleanup, and
              validation.
            </li>
          </ul>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-semibold">Notifications:</span> Firebase
              Cloud Messaging triggers proximity-based alerts when entering risk
              zones.
            </li>
            <li>
              <span className="font-semibold">Risk zones:</span> Automatically
              generated when five or more sightings occur within a short time
              window; displayed as red circular overlays that expire over time.
            </li>
            <li>
              <span className="font-semibold">Security & Privacy:</span> Follows
              the principle of least privilege — only aggregated and essential
              metadata is stored, minimizing personal data usage.
            </li>
          </ul>
        </div>
      </section>

      {/* Key Features */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-300">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-semibold">Real-time map view:</span>{" "}
              Displays live sightings with icons, timestamps, and species info.
            </li>
            <li>
              <span className="font-semibold">Risk zones:</span> Auto-generated
              clusters highlight areas with frequent sightings.
            </li>
            <li>
              <span className="font-semibold">Push notifications:</span> Alerts
              users when entering or approaching an active risk area. (Can be
              customized by distance in settings)
            </li>
            <li>
              <span className="font-semibold">Sighting reports:</span> Simple
              form for submitting animal type, count, description, and GPS
              location.
            </li>
          </ul>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-semibold">Hunting zones:</span> Time-limited
              blue polygons that automatically disappear after expiration.
            </li>
            <li>
              <span className="font-semibold">Analytics:</span> Summarizes
              sightings by time period (≤1h, 12h, 24h, 48h) with local map
              previews. All sighting analytic is unique in the list, so there
              are no duplicates in listing.
            </li>
            <li>
              <span className="font-semibold">Guest mode:</span> Allows quick
              testing and mapview without registration.
            </li>
          </ul>
        </div>
      </section>

      {/* Development Process */}
      <section className="mb-12 space-y-4">
        <h2 className="text-2xl font-bold">Development Process</h2>
        <p className="text-gray-300">
          The project was implemented through iterative sprints: defining
          requirements and prototypes, navigation and map implementation,
          sightings flow, risk-zone logic and notifications, followed by testing
          and optimization. User experience and reliability were prioritized
          throughout the process.
        </p>
        <p className="text-gray-300">
          Technical decisions emphasized simplicity and stability. Expo reduced
          native configuration overhead, Firestore enabled real-time data sync,
          and Cloud Functions separated backend logic from the client. Risk
          zones are generated dynamically based on sighting density and time —
          once the threshold is reached, Firebase Cloud Messaging sends
          proximity-based alerts to nearby users.
        </p>
        <p className="text-gray-300">
          <span className="font-semibold">Platform support:</span> currently
          available only for iOS (EAS Build). Android support has not yet been
          simulated or released. Privacy considerations were prioritized by
          minimizing stored user data and requesting location permissions
          transparently.
        </p>
      </section>

      {/* My Role & Learning Outcomes */}
      <section className="mb-12 space-y-4">
        <h2 className="text-2xl font-bold">My Role & Learning Outcomes</h2>
        <p className="text-gray-300">
          I was responsible for the entire development process: requirements
          definition, UI/UX design, mobile implementation, Firebase
          architecture, risk-zone logic, push notification setup, testing, and
          final deployment. The project was documented as part of my Bachelor’s
          thesis and forms a key piece of my developer portfolio.
        </p>
        <p className="text-gray-300">
          Key learnings include advanced use of Firebase (Auth, Firestore, Cloud
          Functions, FCM), location handling in React Native, proximity-based
          notification logic, performance optimization, and delivering a
          production-ready UI using modern design principles. The project
          strengthened my ability to plan and build a complete, data-driven
          mobile application from concept to deployment.
        </p>
      </section>

      {/* CTA */}
      <section className="flex flex-wrap gap-3">
        <Link
          href="https://github.com/torpeforsten"
          className="px-4 py-2 rounded-lg border border-gray-400 text-gray-200 hover:bg-white hover:text-black transition"
        >
          View on GitHub (Not public yet)
        </Link>
      </section>
    </main>
  );
}
