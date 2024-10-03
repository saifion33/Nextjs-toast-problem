import MyComponent from "@/components/MyComponent";

export default function Home() {
  return (
   <div className="text-center">
    <h1 className=" my-10 text-blue-500 text-3xl">Sonner render problem example app</h1>
    <p className="text-slate-800">Reload this page , if you don&apos;t see a toast then this is not working . if you click the button you will see a toast.</p>
    <MyComponent/>
   </div>
  );
}
