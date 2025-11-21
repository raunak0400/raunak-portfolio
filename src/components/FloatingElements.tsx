export const FloatingElements = () => {
  return (
    <>
      {/* Floating Holographic Cube */}
      <div
        className="fixed w-32 h-32 pointer-events-none z-[5] animate-float-slow opacity-30"
        style={{
          left: '10%',
          top: '20%',
        }}
      >
        <div
          className="w-full h-full border-2 border-primary/40 bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm transform rotate-45"
          style={{
            boxShadow: '0 0 40px hsl(var(--primary) / 0.3), inset 0 0 20px hsl(var(--accent) / 0.2)',
            transform: 'rotateX(30deg) rotateY(-30deg)',
            transformStyle: 'preserve-3d',
          }}
        />
      </div>

      {/* Floating Holographic Sphere */}
      <div
        className="fixed w-40 h-40 pointer-events-none z-[5] animate-float opacity-20"
        style={{
          right: '15%',
          top: '30%',
        }}
      >
        <div
          className="w-full h-full rounded-full border-2 border-accent/40 bg-gradient-to-br from-accent/10 to-primary/10 backdrop-blur-sm"
          style={{
            boxShadow: '0 0 50px hsl(var(--accent) / 0.4), inset 0 0 30px hsl(var(--primary) / 0.2)',
          }}
        />
      </div>

      {/* Floating Holographic Ring */}
      <div
        className="fixed w-36 h-36 pointer-events-none z-[5] animate-float-subtle opacity-25"
        style={{
          left: '70%',
          bottom: '20%',
        }}
      >
        <div
          className="w-full h-full rounded-full border-4 border-primary/50 backdrop-blur-sm"
          style={{
            boxShadow: '0 0 40px hsl(var(--primary) / 0.5), inset 0 0 20px hsl(var(--accent) / 0.3)',
            background: 'radial-gradient(circle, transparent 60%, hsl(var(--primary) / 0.1) 60%)',
          }}
        />
      </div>
    </>
  );
};
