import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/design-system/accordion/accordion";
import { questionsApp } from "@/lib/BDD/faq";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { Typography } from "../typographie/Typographie";

const items = questionsApp

function AccordionTabs() {
  return (
    <div>
      <Accordion type="single" collapsible className="max-w-2xl space-y-6" defaultValue="3">
        {items.map((item) => (
          <AccordionItem
            value={item.id}
            key={item.id}
            className="rounded border-2 bg-primary-200 bg-opacity-75 px-4 py-1 shadow-xl"
          >
            <AccordionPrimitive.Header className="flex">
              <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-2 text-left text-[15px] font-semibold leading-6 transition-all [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                <Typography variant="lead" component="h3" className="md:font-medium">
                  {item.title}
                </Typography>
                <Plus
                  size={16}
                  strokeWidth={2}
                  className="shrink-0 opacity-60 transition-transform duration-200"
                  aria-hidden="true"
                />
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionContent className="pb-2 text-muted-foreground">
              <Typography variant="body-lg" component="p">
                  {item.description}
              </Typography>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export { AccordionTabs };