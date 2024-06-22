import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Control, FieldPath, Form } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "./ui/textarea";

export const PTFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  name: z.string().min(4, "Transfer note is too short"),
  amount: z.string().min(4, "Amount is too short"),
  senderBank: z.string().min(4, "Please select a valid bank account"),
  shareableId: z.string().min(8, "Please select a valid sharable Id"),
});

interface CustomInputProps {
  control: Control<z.infer<typeof PTFormSchema>>;
  name: FieldPath<z.infer<typeof PTFormSchema>>;
  label: string;
  placeholder: string;
  textareaOrInput?: boolean;
}

const PTCustomInput = ({
  control,
  name,
  label,
  placeholder,
  textareaOrInput = false,
}: CustomInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="border-t border-gray-200">
          <div className="payment-transfer_form-item py-5">
            <FormLabel className="text-14 w-full max-w-[280px] font-medium text-gray-700">
              {label}
            </FormLabel>
            <div className="flex w-full flex-col">
              <FormControl>
                {textareaOrInput ? (
                  <Textarea
                    className="input-class"
                    placeholder={placeholder}
                    {...field}
                  />
                ) : (
                  <Input
                    placeholder={placeholder}
                    className="input-class"
                    {...field}
                    type="text"
                  />
                )}
              </FormControl>
              <FormMessage className="form-message mt-2" />
            </div>
          </div>
        </FormItem>
      )}
    />
  );
};

export default PTCustomInput;
