import type { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  animate?: boolean;
  background?: string;
  backgroundGradient?: string;
  notes?: string;
}>;

export const Slide: FC<Props> = ({
  animate,
  background,
  backgroundGradient,
  children,
}) => {
  return (
    <section
      data-background={background}
      data-background-gradient={backgroundGradient}
      data-auto-animate={animate}
    >
      {children}
    </section>
  );
};

export default Slide;
