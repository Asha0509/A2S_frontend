import { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertVendorWaitlistSchema, type InsertVendorWaitlist } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface VendorWaitlistFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedRole?: string;
}

export default function VendorWaitlistForm({ open, onOpenChange, selectedRole }: VendorWaitlistFormProps) {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertVendorWaitlist>({
    resolver: zodResolver(insertVendorWaitlistSchema),
    defaultValues: {
      name: "",
      contact: "",
      role: "",
    },
  });

  // Update form when dialog opens with a selected role
  useEffect(() => {
    if (open && selectedRole) {
      form.setValue("role", selectedRole);
    }
  }, [open, selectedRole, form]);

  const mutation = useMutation({
    mutationFn: async (data: InsertVendorWaitlist) => {
      return await apiRequest("POST", "/api/vendor-waitlist", data);
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "You've been added to our vendor waitlist. We'll contact you soon!",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/vendor-waitlist"] });
      form.reset();
      onOpenChange(false);
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to join waitlist. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertVendorWaitlist) => {
    mutation.mutate(data);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md" data-testid="vendor-waitlist-modal">
        <DialogHeader>
          <DialogTitle data-testid="vendor-waitlist-title">Join Vendor Waitlist</DialogTitle>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" data-testid="vendor-waitlist-form">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter your name" 
                      {...field}
                      data-testid="input-vendor-name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="contact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact</FormLabel>
                  <FormControl>
                    <Input 
                      type="email"
                      placeholder="Enter your email" 
                      {...field}
                      data-testid="input-vendor-contact"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role/Category</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger data-testid="select-vendor-role">
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="vastu" data-testid="option-vastu">Vastu Consultant</SelectItem>
                      <SelectItem value="interior" data-testid="option-interior">Interior Consultant</SelectItem>
                      <SelectItem value="business" data-testid="option-business">Business Consultant</SelectItem>
                      <SelectItem value="carpenter" data-testid="option-carpenter">Carpenter/Furniture Maker</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button 
              type="submit" 
              className="btn-primary w-full py-3 rounded-lg font-semibold"
              disabled={mutation.isPending}
              data-testid="button-submit-vendor"
            >
              {mutation.isPending ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
