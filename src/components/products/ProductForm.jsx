import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";


import TextInput from "../common/formFields/TextInput";
import TextArea from "../common/formFields/TextArea";
import SubmitButton from "../common/formFields/SubmitButton";

import { createProduct } from "../../lib/api";

export function ProductForm() {
  const navigate = useNavigate();

  const [userInputs, setUserInputs] = useState({
    name: "",
    category: "",
    description: "",
    targetMarket: "",
    pressingProblem: "",
    desiredOutcome: "",
    usp: "",
    specificMethod: "",
    stats: "",
    featuredIn: "",
    credibleFigure: "",
    uniqueMechanism: "",
    numberOfReviews: "",
    avgReviewRating: "",
    totalCustomers: "",
    testimonials: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [product, setProduct] = useState([]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserInputs((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const newProduct = await createProduct(userInputs);
      setProduct(newProduct);
      setIsLoading(false);
      navigate(`/ai-copywriter-frontend/dashboard/products/`);
      console.log("New Product:", newProduct);
    } catch (error) {
      console.error("Error creating product:", error);
    }

    // Clear the form after submission
    setUserInputs({
      name: "",
      category: "",
      description: "",
      targetMarket: "",
      pressingProblem: "",
      desiredOutcome: "",
      usp: "",
      specificMethod: "",
      stats: "",
      featuredIn: "",
      credibleFigure: "",
      uniqueMechanism: "",
      numberOfReviews: "",
      avgReviewRating: "",
      totalCustomers: "",
      testimonials: "",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="cursor-pointer py-5">+ Create Product</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-scroll">
        <DialogHeader>
          <DialogTitle>Create New Product</DialogTitle>
          <DialogDescription>
            Fill the following fields to create a product
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4" action="" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 items-center gap-2">
            <TextInput
              label={"Name"}
              id={"name"}
              placeholder={"Ex. ABC Shampoo"}
              value={userInputs.name}
              onChange={handleChange}
              required={true}
            />
          </div>

          <div className="grid grid-cols-2 items-center gap-2">
            <TextInput
              label={"Category"}
              id={"category"}
              placeholder={"Ex. Hair care"}
              value={userInputs.category}
              onChange={handleChange}
              required={true}
            />
          </div>
       

          <div className="grid grid-cols-2 items-center gap-2">
          <TextArea
              label={"Description"}
              id={"description"}
              placeholder={"Ex. 3 in 1 Haircare product that takes care of your hairs in just 30 secs a day"}
              value={userInputs.description}
              onChange={handleChange}
              required={true}
            />
          </div>



          <div className="grid grid-cols-2 items-center gap-2">
            <TextInput
              label={"Target Market"}
              id={"targetMarket"}
              placeholder={"Ex. Women above 25"}
              value={userInputs.targetMarket}
              onChange={handleChange}
              required={false}
            />
          </div>

          <div className="grid grid-cols-2 items-center gap-2">
          <TextArea
              label={"Pressing Problem"}
              id={"pressingProblem"}
              placeholder={"Ex. Hair care for busy professionals who don't have time"}
              value={userInputs.pressingProblem}
              onChange={handleChange}
              required={false}
            />
          </div>

          <div className="grid grid-cols-2 items-center gap-2">
          <TextArea
              label={"Desired Outcome"}
              id={"desiredOutcome"}
              placeholder={"Ex. Healthy hairs in minimal time and effort"}
              value={userInputs.desiredOutcome}
              onChange={handleChange}
              required={false}
            />
          </div>

          <div className="grid grid-cols-2 items-center gap-2">
          <TextArea
              label={"Product Features / USP"}
              id={"usp"}
              placeholder={"Ex. Minimal time, Minimal Effort, Maximum Results"}
              value={userInputs.usp}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-2 items-center gap-2">
          <TextArea
              label={"Specific Technology / Ingredients / Methodology"}
              id={"specificMethod"}
              placeholder={"Ex. Made of the plans from Himalaya"}
              value={userInputs.specificMethod}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-2 items-center gap-2">
          <TextArea
              label={"Scientific Studies / Research / Stats"}
              id={"stats"}
              placeholder={"Ex. Reduces hairfall by 95% in a week of use"}
              value={userInputs.stats}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-2 items-center gap-2">
          <TextArea
              label={"Featured In"}
              id={"featuredIn"}
              placeholder={"Ex. American Express, Forbes"}
              value={userInputs.featuredIn}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-2 items-center gap-2">
          <TextArea
              label={"Credible Authority Figure"}
              id={"credibleFigure"}
              placeholder={"Ex. Bryan Johnson"}
              value={userInputs.credibleFigure}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-2 items-center gap-2">
          <TextArea
              label={"Unique Mechanism"}
              id={"uniqueMechanism"}
              placeholder={"Ex. Repairs and Regrows lost hair folicles"}
              value={userInputs.uniqueMechanism}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-2 items-center gap-2">
            <TextInput
              label={"Number of Reviews"}
              id={"numberOfReviews"}
              placeholder={"Ex. 230"}
              value={userInputs.numberOfReviews}
              onChange={handleChange}
              required={false}
            />
          </div>

          <div className="grid grid-cols-2 items-center gap-2">
            <TextInput
              label={"Average Review Rating"}
              id={"avgReviewRating"}
              placeholder={"Ex. Women above 25"}
              value={userInputs.avgReviewRating}
              onChange={handleChange}
              required={false}
            />
          </div>

          <div className="grid grid-cols-2 items-center gap-2">
            <TextInput
              label={"Total Customers"}
              id={"totalCustomers"}
              placeholder={"Ex. 645"}
              value={userInputs.totalCustomers}
              onChange={handleChange}
              required={false}
            />
          </div>

          <DialogFooter>

            <SubmitButton label={"Create Product"} loadingLabel={"Creating..."} isLoading={isLoading} handleSubmit={handleSubmit} />
            
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default ProductForm;

// import React, { useState } from "react";
// import { Loader2 } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { createProduct } from "../../lib/api";

// export default function ProductFormPage() {
//   const navigate = useNavigate();

//   const [userInputs, setUserInputs] = useState({
//     name: "",
//     category: "",
//     description: "",
//     targetMarket: "",
//     pressingProblem: "",
//     desiredOutcome: "",
//     usp: "",
//     specificMethod: "",
//     stats: "",
//     featuredIn: "",
//     credibleFigure: "",
//     uniqueMechanism: "",
//     numberOfReviews: "",
//     avgReviewRating: "",
//     totalCustomers: "",
//     testimonials: "",
//   });

//   const [isLoading, setIsLoading] = useState(false);

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setUserInputs((prev) => ({ ...prev, [id]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       setIsLoading(true);
//       const newProduct = await createProduct(userInputs);
//       setIsLoading(false);
//       navigate(`/ai-copywriter-frontend/dashboard/products/`);
//       console.log("New Product:", newProduct);
//     } catch (error) {
//       console.error("Error creating product:", error);
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h1 className="text-2xl font-semibold mb-2">Create New Product</h1>
//       <p className="text-sm text-muted-foreground mb-6">
//         Fill the following fields to create a product
//       </p>
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Name & Category */}
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <Label htmlFor="name">Name</Label>
//             <Input
//               id="name"
//               required
//               value={userInputs.name}
//               onChange={handleChange}
//               placeholder="ABC Shampoo"
//             />
//           </div>
//           <div>
//             <Label htmlFor="category">Category</Label>
//             <Input
//               id="category"
//               required
//               value={userInputs.category}
//               onChange={handleChange}
//               placeholder="Cosmetics"
//             />
//           </div>
//         </div>

//         {/* Description */}
//         <div>
//           <Label htmlFor="description">Description</Label>
//           <Textarea
//             id="description"
//             required
//             value={userInputs.description}
//             onChange={handleChange}
//             placeholder="Write a description about your product"
//             className="resize-none"
//           />
//         </div>

//         {/* Grouped Fields */}
//         {[
//           ["targetMarket", "Target Market", "Women above 25"],
//           ["pressingProblem", "Pressing Problem", "Problem your product solves"],
//           ["desiredOutcome", "Desired Outcome", "Desired Outcome"],
//           ["usp", "Product Features / USP", "Specific features or USP"],
//           ["specificMethod", "Specific Technology / Ingredients / Methodology", "Eg. Himalayan salt"],
//           ["stats", "Scientific Studies / Research / Stats", "Any relevant data or study"],
//           ["featuredIn", "Featured In", "Eg. Shark Tank India"],
//           ["credibleFigure", "Credible Authority Figure", "Eg. Bryan Johnson"],
//           ["uniqueMechanism", "Unique Mechanism", "Eg. Made from Himalayan..."],
//           ["numberOfReviews", "Number of Reviews", "Ex. 230"],
//           ["avgReviewRating", "Avg Review Rating", "Eg. 4.3/5.0"],
//           ["totalCustomers", "Total Customers", "Ex. 1013"],
//         ].map(([id, label, placeholder]) => (
//           <div key={id}>
//             <Label htmlFor={id}>{label}</Label>
//             {id.includes("Review") || id === "totalCustomers" || id === "targetMarket" ? (
//               <Input
//                 id={id}
//                 value={userInputs[id]}
//                 onChange={handleChange}
//                 placeholder={placeholder}
//               />
//             ) : (
//               <Textarea
//                 id={id}
//                 value={userInputs[id]}
//                 onChange={handleChange}
//                 placeholder={placeholder}
//                 className="resize-none"
//               />
//             )}
//           </div>
//         ))}

//         {/* Submit Button */}
//         <div className="pt-4">
//           <Button type="submit" disabled={isLoading}>
//             {!isLoading ? (
//               "Create Product"
//             ) : (
//               <>
//                 <Loader2 className="animate-spin mr-2 h-4 w-4" />
//                 Creating
//               </>
//             )}
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// }
