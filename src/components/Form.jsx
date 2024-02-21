import React from 'react'

const Form = () => {
  return (
    <section class="text-gray-600 body-font ">
  <div class=" px-8 py-12 ">
    <div class="flex flex-col text-center w-full mb-4">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4  text-gray-900">সংবাদের তথ্য দিন</h1>
      <p class="w-full px-8">শিরোনাম ছাড়া সংবাদ প্রতিবেদন হয় না। এটা খুবই গুরুত্বপূর্ণ। খবরের একটি সংক্ষিপ্ত বিষয়বস্তু শিরোনামে প্রকাশ পায়। শিরোনাম দেখেই পাঠক সিদ্ধান্ত নেন, খবরটি তিনি পড়বেন কি-না। প্রতিবেদকের নাম বা পদবী, প্রতিবেদন তৈরির স্থান ও মূলঘটনার একটা সংক্ষিপ্ত বিবরণ দিয়ে শুরু হয় সংবাদ প্রতিবেদন। এটা দু’তিন লাইনের মধ্যে শেষ হয়ে থাকে। এরপরের অংশে বিস্তারিত বর্ণনা লিখতে হয়।</p>
    </div>
    <div class="px-12 ">
      <div class="flex flex-wrap m-2 my-12 text-black">
        <div class="p-2 w-1/3">
          <div class="relative">
            <label for="name" class="leading-7 text-xl text-bold ">শিরোনামের ধরণ</label>
            <select className="select w-full my-4">
  <option disabled selected>কোনো আইটেম সিলেক্ট হয়নি   </option>
  <option>সকল</option>
  <option>ব্যনার</option>
  <option>ক্রস</option>
  <option>পিরামিড</option>
  <option>উল্টো পিরামিড</option>
  <option> কটিরেখা</option>
  <option>ফ্ল্যাশলেফট</option>
  <option>ফ্ল্যাশরাইট</option>
  <option>হ্যামার </option>
</select>
          </div>
        </div>
        <div class="p-2 w-1/3">
          <div class="relative">
            <label for="email" class="leading-7 text-xl text-bold ">সংবাদের ধরণ</label>
            <select className="select w-full my-4">
  <option disabled selected>কোনো আইটেম সিলেক্ট হয়নি   </option>
 
  <option>রাজনীতি</option>
  <option>বাংলাদেশ</option>
  <option>অপরাধ</option>
  <option>বিশ্ব</option>
  <option>বাণিজ্য</option>
  <option>খেলা</option>
  <option>বিনোদন</option>
  <option>চাকরি</option>
  <option>জীবনযাপন</option>
</select>
          </div>
        </div>
        <div class="p-2 w-1/3">
          <div class="relative">
            <label for="name" class="leading-7 text-xl text-bold ">আকর্ষনীয় ধরণ</label>
            <select className="select w-full my-4">
  <option disabled selected>কোনো আইটেম সিলেক্ট হয়নি   </option>
  <option>সকল</option>
  <option>উক্তি</option>
  <option>মুল কথা</option>
  <option>শিখুন</option>
  <option> পরিসংখ্যান</option>
  <option>আশ্চর্য</option>
  <option>সময়োপযোগী</option>
  <option>কৌতুক প্রবন </option>
</select>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-xl text-bold">সংবাদ</label>
            <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-64 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button class="flex mx-2 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">জমা দিন</button>
        </div>
        
      </div>
    </div>
  </div>
</section>
  )
}

export default Form