/* Copyright 2020 the Deno authors. All rights reserved. MIT license. */

import React from "react";
import Head from "next/head";
import Link from "next/link";
import CodeBlock from "../components/CodeBlock";
import Footer from "../components/Footer";
import versions from "../versions.json";
import { NextPage, GetStaticProps } from "next";
import InlineCode from "../components/InlineCode";
import Header from "../components/Header";
import { CookieBanner } from "../components/CookieBanner";

interface HomeProps {
  latestStd: string;
}

const Home: NextPage<HomeProps> = ({ latestStd }) => {
  const complexExampleProgram = `import { serve } from "https://deno.land/std@${latestStd}/http/server.ts";
const s = serve({ port: 8000 });
console.log("http://localhost:8000/");
for await (const req of s) {
  req.respond({ body: "Hello World\\n" });
}`;

  return (
    <>
      <Head>
        <title>دينو - بيئة آمنية لتشغيل اكواد جافا سكريبت وتايب سكيبت تتميز </title>
      </Head>
      <CookieBanner />
      <div className="bg-white">
        <div className="bg-gray-50 border-b border-gray-200">
          <Header />
          <div className="max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8 pt-12 pb-20 flex flex-col items-center">
            <h1 className="font-extrabold text-5xl leading-10 tracking-tight text-gray-900">
              Deno
            </h1>
            <h2 className="mt-4 sm:mt-5 font-light text-2xl text-center leading-tight text-gray-900">
              
              بيئة <strong className="font-semibold">آمنة</strong> لتشغيل  
              
              {" "}<strong className="font-semibold">JavaScript</strong>
              {" "} و <strong className="font-semibold">TypeScript</strong>.
            </h2>
          </div>
        </div>
        <div className="max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8 mt-20">
          <p className="my-4 text-gray-700">
            بيئة بسيطة، عصرية وآمنية لتشغيل اكواد جافا سكريبت وتايب سكريبت تستخدم محرك V8 مبنية على لغة Rust
            Deno is a simple, modern and secure runtime for JavaScript and
            TypeScript that uses V8 and is built in Rust.
          </p>
          <ol className="ml-8 list-disc text-gray-700">
            <li>
              .آمنة بشكل افتراضي، بحيث لا يمكن الوصول الى ملفات، الشبكة، البيئة ما لم يتم طلب تمكينها بشكل صريح
              
            </li>
            <li>.تدعم تايب سكريبت بشكل افرتاضي</li>
            <li>تعمل بملف تنفيذي واحد فقط.</li>
            <li>
              تحتوي على أدوات مساعدة مدمجة (
              <InlineCode>deno info</InlineCode>) و منسق الكود (
              <InlineCode>deno fmt</InlineCode>).
            </li>
            <li>
              لديها مجموعة من الوحدات القياسية التي يتم مراجعتها من طرف فريق تطوير دينو لتعمل بشكل جيد ودون مشاكل مع دينو:{" "}
              <a href="https://deno.land/std" className="link">
                deno.land/std
              </a>
            </li>
          </ol>
        </div>
        <div className="max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8 mt-20">
          <Link href="#installation">
            <a className="hover:underline">
              <h3 className="font-bold text-xl" id="installation">
                التثبيت
              </h3>
            </a>
          </Link>
          <InstallSection />
        </div>
        <div className="max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8 mt-20">
          <Link href="#getting-started">
            <a className="hover:underline">
              <h3 className="font-bold text-xl" id="getting-started">
                البداية
              </h3>
            </a>
          </Link>
          <p className="my-4 text-gray-700">جرب تشغيل هذا البرنامج البسيط:</p>
          <CodeBlock
            code="deno run https://deno.land/std/examples/welcome.ts"
            language="bash"
          />
          <p className="my-4 text-gray-700">او جرب هذا المثال المعقد قليلا (خادم http):</p>
        </div>
        <div className="max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8">
          <CodeBlock
            code={complexExampleProgram}
            language="typescript"
            disablePrefixes
          />
        </div>
        <div className="max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8">
          <p className="my-4 text-gray-700">
              لمشاهدة امثلة اخرى وكيفية تهيئة البيئة للتعامل مع دينو يمكنك زيارة صفحة الارشادات
              <Link href="/[...rest]" as="/manual">
              <a className="link"> من هنا </a>
            </Link>
            .
          </p>
        </div>
        <div className="max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8 mt-20">
          <Link href="#runtime-documentation">
            <a className="hover:underline">
              <h3 className="font-bold text-xl" id="runtime-documentation">
                واجهة برمجة التطبيقات 
              </h3>
            </a>
          </Link>
          <p className="my-4 text-gray-700">
            The basic runtime documentation for Deno can be found on{" "}
            <a href="https://doc.deno.land/builtin/stable" className="link">
              doc.deno.land
            </a>
            .
          </p>
          <p className="my-4 text-gray-700">
            تأتي دينو مع{" "}
            <Link href="/[...rest]" as="/manual">
              <a className="link">a manual</a>
            </Link>{" "}
            which contains more in depth explanations about the more complex
            functions of the runtime, an introduction to the concepts that Deno
            is built on, details about the internals of Deno, how to embed Deno
            in your own application and how to extend Deno using Rust plugins.
          </p>
          <p className="my-4 text-gray-700">
            The manual also contains information about the built in tools that
            Deno provides.
          </p>
        </div>
        <div className="max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8 mt-20">
          <Link href="#standard-modules">
            <a className="hover:underline">
              <h3 className="font-bold text-xl" id="standard-modules">
                الوحدات القياسية
              </h3>
            </a>
          </Link>
          <p className="my-4 text-gray-700">
            الوحدات القياسية هي   وحدات  يشرف على تدقيقها ومراجعتها فريق 
            تطوير دينو لتكون مصمونة للعمل مع اصدار معين من دينو بدون اخطاء
            وهي موجودة بجانب الكود المصدري لدينو في المستودع التالي
            {" "}
            <a href="https://github.com/denoland/deno" className="link">
              denoland/deno
            </a>
          </p>
          <p className="my-4 text-gray-700">
            These standard modules are hosted at{" "}
            <Link href="/[...rest]" as="/std">
              <a className="link">deno.land/std</a>
            </Link>{" "}
            ويتم الوصول اليها معن طريق URL's معين مثلها مثل اي وحدات ES لتكون متوافة للعمل مع دينو
            
          </p>
        </div>
        <div className="max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8 mt-20">
          <Link href="#third-party-modules">
            <a className="hover:underline">
              <h3 className="font-bold text-xl" id="third-party-modules">
                وحدات الطرف الثالث
              </h3>
            </a>
          </Link>
          <p className="my-4 text-gray-700">
            يمكن لدينو استيراد الوحدات الخارجية من اي مصدر من شبكة الويب، مثل GitHub، 
            استظافة خاصة، او شبكة توصيل محتوى (CDN) مثل {" "}
            <a href="https://www.skypack.dev" className="link">
              Skypack
            </a>{" "}
            or{" "}
            <a href="https://jspm.io" className="link">
              jspm.io
            </a>
            .
          </p>
          <p className="my-4 text-gray-700">
            من اجل تسهيل استخدام وحدات الطرف الثالث توفر دينو بعض الادوات المدمجة مثل
            <InlineCode>deno info</InlineCode> و{" "}
            <InlineCode>deno doc</InlineCode>. deno.land also provides a web UI
            لمشاهدة توثيق هذه الوحدات. هو متاح على{" "}
            <a href="https://doc.deno.land" className="link">
              doc.deno.land
            </a>
            .
          </p>
          <p className="my-4 text-gray-700">
            كما توفر دينو ايضا خدمة استظافة عامة ل وحدات ES التي تعمل مع دينو
            . يمكنك مشاهداتها عبر{" "}
            <Link href="/x">
              <a className="link">deno.land/x</a>
            </Link>
            .
          </p>
        </div>
        <div className="mt-20">
          <Footer simple />
        </div>
      </div>
    </>
  );
};

const InstallSection = () => {
  const shell = (
    <div key="shell" className="my-4 text-gray-700">
      <p className="py-2">Shell (ماك, لينكس):</p>
      <CodeBlock
        language="bash"
        code={`curl -fsSL https://deno.land/x/install/install.sh | sh`}
      />
    </div>
  );
  const homebrew = (
    <div key="homebrew" className="my-4 text-gray-700">
      <p className="mb-2">
        <a href="https://formulae.brew.sh/formula/deno" className="link">
          Homebrew
        </a>{" "}
        (ماك):
      </p>
      <CodeBlock language="bash" code={`brew install deno`} />
    </div>
  );
  const powershell = (
    <div key="powershell" className="my-4 text-gray-700">
      <p className="mb-2">PowerShell (ويندوز):</p>
      <CodeBlock
        language="bash"
        code={`iwr https://deno.land/x/install/install.ps1 -useb | iex`}
      />
    </div>
  );
  const chocolatey = (
    <div key="chocolatey" className="my-4 text-gray-700">
      <p className="mb-2">
        <a href="https://chocolatey.org/packages/deno" className="link">
          Chocolatey
        </a>{" "}
        (ويندوز):
      </p>
      <CodeBlock language="bash" code={`choco install deno`} />
    </div>
  );
  const scoop = (
    <div key="scoop" className="my-4 text-gray-700">
      <p className="mb-2">
        <a href="https://scoop.sh/" className="link">
          Scoop
        </a>{" "}
        (ويندوز):
      </p>
      <CodeBlock language="bash" code={`scoop install deno`} />
    </div>
  );
  const cargo = (
    <div key="cargo" className="my-4 text-gray-700">
      <p className="py-2">
        او عبر{" "}
        <a href="https://crates.io/crates/deno" className="link">
          Cargo
        </a>
      </p>
      <CodeBlock language="bash" code={`cargo install deno`} />
    </div>
  );

  return (
    <>
      <p className="my-4 text-gray-700">
        يتم تثبيت دينو بملف تنفيذي واحد فقط اي انها لا تحتاج الى اي تبعيات. يمكنك تثبيت دينو عبر المثبتات الموضحة في الاسفل, او يمكنك تحميل الملف التنفيذي من{" "}
        <a href="https://github.com/denoland/deno/releases" className="link">
          صفحة الاصدارات
        </a>
        .
      </p>
      {shell}
      {powershell}
      {homebrew}
      {chocolatey}
      {scoop}
      {cargo}
      <p className="my-4 text-gray-700">
        او يمكنك زياية{" "}
        <a className="link" href="https://github.com/denoland/deno_install">
          deno_install
        </a>{" "}
        لمزيد من خيارات التثبيت.
      </p>
    </>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return {
    props: {
      latestStd: versions.std[0],
    },
  };
};

export default Home;
