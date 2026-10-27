// Funções pequenas para decidir como um link deve se comportar.

// O link ainda é um placeholder (contém "SEU_") ou está vazio?
export function isMissingLink(href) {
  return !href || href.includes('SEU_');
}

// O link leva para fora do site (http ou https)?
export function isExternalLink(href) {
  return /^https?:\/\//i.test(href);
}
