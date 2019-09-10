import { ASTVisitor } from '../../language/visitor';
import { ValidationContext } from '../ValidationContext';

/**
 * Variables passed to field arguments conform to type
 */
export function VariablesInAllowedPosition(
  context: ValidationContext,
): ASTVisitor;
