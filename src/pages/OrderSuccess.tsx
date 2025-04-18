
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const OrderSuccess = () => {
  const navigate = useNavigate();
  const orderNumber = Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 bg-cream/20 flex items-center justify-center">
        <div className="container mx-auto px-4 max-w-lg text-center">
          <div className="bg-white rounded-xl shadow-sm border border-border p-8">
            <div className="inline-flex items-center justify-center p-6 bg-primary/10 rounded-full mb-6">
              <CheckCircle2 size={48} className="text-primary" />
            </div>
            
            <h1 className="text-3xl font-bold text-brown mb-4">Order Successful!</h1>
            <p className="text-foreground/70 mb-6">
              Thank you for your purchase. Your order has been received and is being processed.
            </p>
            
            <div className="bg-muted p-4 rounded-lg mb-8">
              <p className="font-medium">Order Number:</p>
              <p className="text-xl font-bold text-primary"># {orderNumber}</p>
            </div>
            
            <p className="text-foreground/70 mb-8">
              We've sent a confirmation email with all the details of your order.
              You can track the status of your order in your account dashboard.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-primary hover:bg-primary/90 text-white rounded-full"
                onClick={() => navigate("/shop")}
              >
                Continue Shopping
              </Button>
              
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 rounded-full"
                onClick={() => navigate("/")}
              >
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderSuccess;
