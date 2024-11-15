import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function DownloadButton() {
    return (
        <Button variant="secondary">
            <X className="-ms-1 me-2 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
            Button
        </Button>
    );
}
