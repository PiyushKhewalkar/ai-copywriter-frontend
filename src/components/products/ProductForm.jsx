import React, { useState } from "react";
import { Loader2 } from "lucide-react";

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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { createProduct } from "../../lib/api";

export function ProductForm() {

  const navigate = useNavigate()


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
      setIsLoading(true)
      const newProduct = await createProduct(userInputs);
      setProduct(newProduct);
      setIsLoading(false)
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
              <Label htmlFor="name" className="">
                Name
              </Label>
              <Input
                id="name"
                required
                value={userInputs.name}
                onChange={handleChange}
                placeholder="ABC Shampoo"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-2 items-center gap-2">
              <Label htmlFor="category" className="">
                Category
              </Label>
              <Input
                id="category"
                required
                value={userInputs.category}
                onChange={handleChange}
                placeholder="Cosmetics"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-2 items-center gap-2">
              <Label htmlFor="description" className="">
                Description
              </Label>
              <Textarea
                id="description"
                required
                value={userInputs.description}
                onChange={handleChange}
                placeholder="Write a description about your product"
                className="col-span-3 resize-none"
              />
            </div>
            <div className="grid grid-cols-2 items-center gap-2">
              <Label htmlFor="targetMarket" className="">
                Target Market
              </Label>
              <Input
                id="targetMarket"
                value={userInputs.targetMarket}
                onChange={handleChange}
                placeholder="Women above 25"
                className="col-span-3"
              />
            </div>
       
          <div className="grid grid-cols-2 items-center gap-2">
              <Label htmlFor="pressingProblem" className="">
                Pressing Problem
              </Label>
              <Textarea
                id="pressingProblem"
                value={userInputs.pressingProblem}
                onChange={handleChange}
                placeholder="Problem your product solves"
                className="col-span-3 resize-none"
              />
            </div>
            <div className="grid grid-cols-2 items-center gap-2">
              <Label htmlFor="desiredOutcome" className="">
                Desired Outcome
              </Label>
              <Textarea
                id="desiredOutcome"
                value={userInputs.desiredOutcome}
                onChange={handleChange}
                placeholder="Desired Outcome"
                className="col-span-3 resize-none"
              />
            </div>
            <div className="grid grid-cols-2 items-center gap-2">
              <Label htmlFor="usp" className="">
                Product Features / USP
              </Label>
              <Textarea
                id="usp"
                value={userInputs.usp}
                onChange={handleChange}
                placeholder="Specific features or USP about your product"
                className="col-span-3 resize-none"
              />
            </div>
            <div className="grid grid-cols-2 items-center gap-2">
              <Label htmlFor="specificMethod">
                Specific Technology / ingredients / Methodology
              </Label>
              <Textarea
                id="specificMethod"
                value={userInputs.specificMethod}
                onChange={handleChange}
                placeholder="Specific technology your product has"
                className="col-span-3 resize-none"
              />
            </div>
            <div className="grid grid-cols-2 items-center gap-2">
              <Label htmlFor="stats" className="">
                Scientific studies / Research / stats
              </Label>
              <Textarea
                id="stats"
                value={userInputs.stats}
                onChange={handleChange}
                placeholder="Scientific research about your product"
                className="col-span-3 resize-none"
              />
            </div>
            <div className="grid grid-cols-2 items-center gap-2">
              <Label htmlFor="featuredIn" className="">
                Featured In
              </Label>
              <Textarea
                id="featuredIn"
                value={userInputs.featuredIn}
                onChange={handleChange}
                placeholder="eg. Shark Tank India"
                className="col-span-3 resize-none"
              />
            </div>
            <div className="grid grid-cols-2 items-center gap-2">
              <Label htmlFor="credibleFigure" className="">
                Credible Authority Figure
              </Label>
              <Textarea
                id="credibleFigure"
                value={userInputs.credibleFigure}
                onChange={handleChange}
                placeholder="Eg. Bryan Johnson"
                className="col-span-3 resize-none"
              />
            </div>
            <div className="grid grid-cols-2 items-center gap-2">
              <Label htmlFor="uniqueMechanism" className="">
                Unique Mechanism
              </Label>
              <Textarea
                id="uniqueMechanism"
                value={userInputs.uniqueMechanism}
                onChange={handleChange}
                placeholder="Eg. Made from himalayan..."
                className="col-span-3 resize-none"
              />
            </div>
            <div className="grid grid-cols-2 items-center gap-2">
              <Label htmlFor="numberOfReviews" className="">
                Number of Reviews
              </Label>
              <Input
                id="numberOfReviews"
                value={userInputs.numberOfReviews}
                onChange={handleChange}
                placeholder="Ex. 230"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-2 items-center gap-2">
              <Label htmlFor="avgReviewRating" className="">
                Avg review rating
              </Label>
              <Input
                id="avgReviewRating"
                value={userInputs.avgReviewRating}
                onChange={handleChange}
                placeholder="Eg. 4.3/5.0"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-2 items-center gap-2">
              <Label htmlFor="totalCustomers" className="">
                Total no. of customers
              </Label>
              <Input
                id="totalCustomers"
                value={userInputs.totalCustomers}
                onChange={handleChange}
                placeholder="ex. 1013"
                className="col-span-3"
              />
            </div>
            

          <DialogFooter>
            {!isLoading ? (
              <Button type="submit">Create Product</Button>
            ) : (
              <Button disabled>
                <Loader2 className="animate-spin" />
                Creating
              </Button>
            )}
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
