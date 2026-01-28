import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";

export const SelfAvatar = () => {
  return (
    <Avatar size="lg">
      <AvatarImage
        src="https://gravatar.com/avatar/f7598bd8d4aba38d7219341f81a162fc842376b3b556b1995cbb97271d9e2915?&size=256"
        alt="@samhacker"
        loading="lazy"
      />
      <AvatarFallback>SH</AvatarFallback>
    </Avatar>
  );
};
