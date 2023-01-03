// Prefer type over interface
// In typescript, type and interface are very similar constructs when used for typing objects. Though maybe controversial, my recommendation is to consistently use type in most cases and only use interface when either of the following is true:

// You want to take advantage of the "merging" feature of interface.

// You have OO style code involving class/interface hierarchies.

// Otherwise, always using the more versatile type construct results in more consistent code.
